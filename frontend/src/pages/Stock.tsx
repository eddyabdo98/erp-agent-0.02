import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Layout from '../components/Layout';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'itemId', headerName: 'Item ID', width: 130 },
  { field: 'quantity', headerName: 'Quantity', width: 130, type: 'number' },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'date', headerName: 'Date', width: 200, type: 'date' },
];

const Stock: React.FC = () => {
  const [stockMovements, setStockMovements] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch stock movements from API
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Stock Management
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={stockMovements}
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

export default Stock;