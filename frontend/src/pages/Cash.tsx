import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Layout from '../components/Layout';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130, type: 'number' },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'date', headerName: 'Date', width: 200, type: 'date' },
];

const Cash: React.FC = () => {
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch cash transactions from API
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Cash Management
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={transactions}
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

export default Cash;