import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import StatusCell from './StatusCell';
import { ToDoRow } from '../../types';
import ActionsCell from './ActionsCell';

interface TodoDataGridProps {
  rows: ToDoRow[];
  loading: boolean;
  handleMarkAsCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
}
export default function TodoDataGrid({ rows, loading, handleMarkAsCompleted, handleDelete }: TodoDataGridProps) {
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
        <ActionsCell
          id={params.row.id}
          status={params.row.completed}
          handleDelete={handleDelete}
          handleMarkAsCompleted={handleMarkAsCompleted} />
      ),
    },
  ];

  return (
    <Box sx={{ height: 700, width: '80%', margin: 'auto' }}>
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
