import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editTask } from '../features/tasks/tasksSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const EditTask = () => {
  const { taskId } = useParams();
  const tasks = useSelector(state => state.tasks);
  const taskToEdit = tasks.find(task => task.id.toString() === taskId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editedTitle, setEditedTitle] = useState(taskToEdit.title);

  const handleEdit = () => {
    dispatch(editTask({ id: taskToEdit.id, updatedTask: { title: editedTitle } }));
    navigate('/');
  };

  return (
    <Container>
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Edit Task
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Task Title"
              variant="outlined"
              fullWidth
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleEdit}>
              Save
            </Button>
            <Button variant="contained" color='error' style={{marginLeft: 10}} onClick={() => {navigate('/')}}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  </Container>
  );
};

export default EditTask;
