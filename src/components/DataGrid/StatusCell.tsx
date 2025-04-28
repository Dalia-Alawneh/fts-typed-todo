import { Box } from '@mui/material'
import { ToDoStatus } from '../../types'

const StatusCell = ({ status }: { status: ToDoStatus }) => {
  return (
    <Box sx={{ display: 'flex', height: '100%', alignItems: "center", }} >
      <Box sx={{
        width: '60px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: "center", padding: '0px 20px', color: 'white',
        bgcolor: status === ToDoStatus.completed ? 'success.light' : 'warning.light', borderRadius: 10, textAlign: 'center',
      }}>
        {status}
      </Box>
    </Box>
  )
}

export default StatusCell
