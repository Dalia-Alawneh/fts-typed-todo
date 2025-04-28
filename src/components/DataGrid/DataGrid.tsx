import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import StatusCell from './StatusCell';
import { ToDoRow } from '../../types';
import ActionsCell from './ActionsCell';

const columns: GridColDef<(ToDoRow[])[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'todo',
    headerName: 'TODO Description',
    flex: 0.5,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.2,
    editable: false,

    renderCell: (params) => (
      <StatusCell status={params.row.completed} />
    )
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    editable: false,
    width: 200,
    renderCell: (params) => (
      <ActionsCell status={params.row.completed} />
    ),
  },
];

export default function TodoDataGrid({ rows }: { rows: ToDoRow[] }) {
  return (
    <Box sx={{ height: 400, width: '80%', margin: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
