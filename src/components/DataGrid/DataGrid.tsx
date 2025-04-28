import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
      <Box sx={{display: 'flex', height: '100%', alignItems: "center", }} >
        <Box sx={{
        width: '60px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: "center", padding: '0px 20px', color: 'white',
        bgcolor: params.row.status === 'Completed' ? 'success.light' : 'warning.light', borderRadius: 10, textAlign: 'center',
      }}>
        {params.row.status}

        </Box>
      </Box>
    )
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    editable: false,
    width: 200,
    renderCell: (params) => (
      <Box>
        <Tooltip title={params.row.status === 'Completed' ? "Completed" : "Mark as Completed"}>
          <span>
            <IconButton
              aria-label="mark as completed"
              color="success"
              // onClick={() => handleMarkAsCompleted(params.row.id)}
              disabled={params.row.status === 'Completed'}
            >
              {params.row.status === 'Completed' ? (
                <CheckCircleIcon />
              ) : (
                <CheckCircleOutlineIcon />
              )}

            </IconButton>
          </span>
        </Tooltip>
        <IconButton
          aria-label="delete"
          color="error"
        // onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
  },
];
const rows = [
  { id: 1, todo: 'Buy groceries', status: 'Pending' },
  { id: 2, todo: 'Complete homework', status: 'Pending' },
  { id: 3, todo: 'Clean the house', status: 'Completed' },
  { id: 4, todo: 'Pay bills', status: 'Pending' },
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
