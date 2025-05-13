import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ToDoRow } from '../../types';

interface TodoDataGridProps {
  columns: GridColDef<(ToDoRow[])[number]>[];
  rows: ToDoRow[];
  loading: boolean;
}
export default function TodoDataGrid({ columns,rows, loading }: TodoDataGridProps) {

  return (
    <Box sx={{ height: 700, width: '100%', margin: 'auto' }}>
      <DataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
