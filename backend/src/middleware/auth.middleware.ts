import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    (req as any).user = decoded;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const userRole = (req as any).user.role;

      if (!roles.includes(userRole)) {
        res.status(403).json({ error: 'Insufficient permissions' });
        return;
      }

      next();
    } catch (error) {
      console.error('Authorization error:', error);
      res.status(403).json({ error: 'Authorization failed' });
    }
  };
};