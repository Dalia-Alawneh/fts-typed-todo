import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ToDoStatus } from '../../types';

interface ActionsCellProps {
  status: boolean;
  id: number;
  handleMarkAsCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
}
const ActionsCell = ({ status, id, handleMarkAsCompleted, handleDelete }: ActionsCellProps) => {
  return (
    <Box>
      <Tooltip title={status ? ToDoStatus.completed : "Mark as Completed"}>
        <span>
          <IconButton
            aria-label="mark as completed"
            color="success"
            onClick={() => handleMarkAsCompleted(id)}
            disabled={status}
          >
            {status ? (
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
        onClick={() => handleDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

export default ActionsCell
