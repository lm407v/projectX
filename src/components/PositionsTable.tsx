import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Card, CardContent, Typography } from '@mui/material';
import type { PositionRow } from '../data/types';

interface PositionsTableProps {
  rows: PositionRow[];
}

const columns: GridColDef[] = [
  { field: 'symbol', headerName: 'Symbol', flex: 0.6, minWidth: 110 },
  { field: 'name', headerName: 'Company', flex: 1.2, minWidth: 200 },
  {
    field: 'quantity',
    headerName: 'Qty',
    type: 'number',
    flex: 0.4,
    valueFormatter: ({ value }) => value.toLocaleString()
  },
  {
    field: 'avgCost',
    headerName: 'Avg cost',
    flex: 0.6,
    valueFormatter: ({ value }) => `$${value.toFixed(2)}`
  },
  {
    field: 'marketValue',
    headerName: 'Market value',
    flex: 0.8,
    valueFormatter: ({ value }) => `$${value.toLocaleString()}`
  },
  {
    field: 'gainLoss',
    headerName: 'Gain / Loss',
    flex: 0.6,
    valueFormatter: ({ value }) => `$${value.toLocaleString()}`
  },
  {
    field: 'gainLossPercent',
    headerName: 'Gain %',
    flex: 0.5,
    valueFormatter: ({ value }) => `${value.toFixed(2)}%`
  }
];

const PositionsTable = ({ rows }: PositionsTableProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          Positions
        </Typography>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Holdings summary
        </Typography>
        <div style={{ height: 360, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnMenu
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
            sx={{
              border: 'none',
              '& .MuiDataGrid-columnHeaders': {
                bgcolor: 'rgba(15, 23, 42, 0.04)',
                borderRadius: 2
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 600
              },
              '& .MuiDataGrid-row:hover': {
                bgcolor: 'rgba(26, 115, 232, 0.04)'
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PositionsTable;
