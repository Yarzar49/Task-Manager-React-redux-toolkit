import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      dispatch(addTask({ id: Date.now(), title: taskTitle }));
      setTaskTitle('');
      navigate('/');
    }
  };

  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Add New Task
        </Typography>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
        <Button variant="contained" onClick={handleAddTask}>
          Add Task
        </Button>
      </Paper>
    </Box>
  );
};

export default TaskForm;
