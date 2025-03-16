import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Layout from '../components/Layout';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'price', headerName: 'Price', width: 130, type: 'number' },
  { field: 'quantity', headerName: 'Quantity', width: 130, type: 'number' },
];

const Items: React.FC = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch items from API
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Items Management
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={items}
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

export default Items;