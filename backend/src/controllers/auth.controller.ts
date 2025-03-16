import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';
import { Role } from '../entities/Role';

export class AuthController {
  static login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { username },
        relations: ['role']
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const validPassword = await user.validatePassword(password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      if (!user.isActive) {
        return res.status(401).json({ message: 'User is inactive' });
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role.name },
        process.env.JWT_SECRET || 'your_jwt_secret_key',
        { expiresIn: '24h' }
      );

      return res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          fullName: user.fullName,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  static register = async (req: Request, res: Response) => {
    try {
      const { username, password, fullName, email, roleId } = req.body;

      if (!username || !password || !fullName || !email || !roleId) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const userRepository = getRepository(User);
      const roleRepository = getRepository(Role);

      const existingUser = await userRepository.findOne({
        where: [{ username }, { email }]
      });

      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
      }

      const role = await roleRepository.findOne({ where: { id: roleId } });
      if (!role) {
        return res.status(400).json({ message: 'Role not found' });
      }

      const user = new User();
      user.username = username;
      user.password = password;
      user.fullName = fullName;
      user.email = email;
      user.role = role;

      await userRepository.save(user);

      return res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user.id,
          username: user.username,
          fullName: user.fullName,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  static changePassword = async (req: Request, res: Response) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = req.user?.id;

      if (!userId || !currentPassword || !newPassword) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const validPassword = await user.validatePassword(currentPassword);
      if (!validPassword) {
        return res.status(401).json({ message: 'Current password is incorrect' });
      }

      user.password = newPassword;
      await userRepository.save(user);

      return res.json({ message: 'Password changed successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  static me = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ message: 'Not authenticated' });
      }

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { id: userId },
        relations: ['role']
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.json({
        user: {
          id: user.id,
          username: user.username,
          fullName: user.fullName,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
}