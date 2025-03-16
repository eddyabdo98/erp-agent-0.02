import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Layout from '../components/Layout';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'address', headerName: 'Address', width: 300 },
];

const Suppliers: React.FC = () => {
  const [suppliers, setSuppliers] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch suppliers from API
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Suppliers Management
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={suppliers}
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

export default Suppliers;