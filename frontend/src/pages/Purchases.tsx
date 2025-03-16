import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Layout from '../components/Layout';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'supplierId', headerName: 'Supplier ID', width: 130 },
  { field: 'itemId', headerName: 'Item ID', width: 130 },
  { field: 'quantity', headerName: 'Quantity', width: 130, type: 'number' },
  { field: 'price', headerName: 'Price', width: 130, type: 'number' },
  { field: 'totalPrice', headerName: 'Total Price', width: 130, type: 'number' },
  { field: 'date', headerName: 'Date', width: 200, type: 'date' },
];

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch purchases from API
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Purchases Management
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={purchases}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Purchases;