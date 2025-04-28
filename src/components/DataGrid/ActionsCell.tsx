import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ToDoStatus } from '../../types';
const ActionsCell = ({status}:{status: ToDoStatus}) => {
  return (
    <Box>
        <Tooltip title={status === ToDoStatus.completed ? "Completed" : "Mark as Completed"}>
          <span>
            <IconButton
              aria-label="mark as completed"
              color="success"
              // onClick={() => handleMarkAsCompleted(params.row.id)}
              disabled={status === ToDoStatus.completed}
            >
              {status === ToDoStatus.completed ? (
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
  )
}

export default ActionsCell
