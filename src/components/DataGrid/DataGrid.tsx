import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import StatusCell from './StatusCell';
import { ToDoRow, ToDoStatus } from '../../types';
import ActionsCell from './ActionsCell';

const columns: GridColDef<(typeof rows)[number]>[] = [
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
      <StatusCell status={params.row.status as ToDoStatus} />
    )
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    editable: false,
    width: 200,
    renderCell: (params) => (
      <ActionsCell status={params.row.status as ToDoStatus} />
    ),
  },
];
const rows: ToDoRow[] = [
  { id: 1, todo: 'Buy groceries', status: ToDoStatus.completed },
  { id: 2, todo: 'Complete homework', status: ToDoStatus.pending },
  { id: 3, todo: 'Clean the house', status: ToDoStatus.pending },
  { id: 4, todo: 'Pay bills', status: ToDoStatus.pending },
];

export default function TodoDataGrid() {
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
