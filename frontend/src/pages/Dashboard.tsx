import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import {
  Inventory as InventoryIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalAtm as LocalAtmIcon,
  Receipt as ReceiptIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, onClick }) => (
  <Paper
    sx={{
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor: onClick ? 'pointer' : 'default',
      '&:hover': onClick ? { backgroundColor: 'action.hover' } : {},
    }}
    onClick={onClick}
  >
    <Box display="flex" alignItems="center" mb={2}>
      {icon}
      <Typography variant="h6" component="div" ml={1}>
        {title}
      </Typography>
    </Box>
    <Typography variant="h4" component="div">
      {value}
    </Typography>
  </Paper>
);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = React.useState({
    totalItems: 0,
    totalClients: 0,
    totalPurchases: 0,
    totalSales: 0,
    cashBalance: 0,
  });

  React.useEffect(() => {
    // Fetch dashboard statistics from the backend
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:10100/api/dashboard/stats', {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              title="Total Items"
              value={stats.totalItems}
              icon={<InventoryIcon color="primary" sx={{ fontSize: 40 }} />}
              onClick={() => navigate('/items')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              title="Total Clients"
              value={stats.totalClients}
              icon={<PeopleIcon color="primary" sx={{ fontSize: 40 }} />}
              onClick={() => navigate('/clients')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              title="Total Purchases"
              value={`$${stats.totalPurchases.toLocaleString()}`}
              icon={<ShoppingCartIcon color="primary" sx={{ fontSize: 40 }} />}
              onClick={() => navigate('/purchases')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              title="Total Sales"
              value={`$${stats.totalSales.toLocaleString()}`}
              icon={<ReceiptIcon color="primary" sx={{ fontSize: 40 }} />}
              onClick={() => navigate('/sales')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              title="Cash Balance"
              value={`$${stats.cashBalance.toLocaleString()}`}
              icon={<LocalAtmIcon color="primary" sx={{ fontSize: 40 }} />}
              onClick={() => navigate('/cash')}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;