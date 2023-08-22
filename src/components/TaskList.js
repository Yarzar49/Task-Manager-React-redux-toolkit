import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Import the Grid component

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/add">
        <Button variant="contained" color="primary">
          Add Task
        </Button>
      </Link>
      <Grid container spacing={2} style={{marginTop: 20}}> {/* Wrap the tasks in a Grid container */}
        {tasks.map((task) => (
          <Grid item xs={12} md={4} key={task.id}> {/* Specify columns for xs and md screens */}
            <Card sx={{ maxWidth: 345 }} className="mt-3">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span>{task.title}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/edit/${task.id}`}>
                  <Button variant="contained" color="primary" size="small">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteTask(task.id)}
                  size="small"
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TaskList;
