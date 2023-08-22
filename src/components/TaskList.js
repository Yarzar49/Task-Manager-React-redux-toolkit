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
      <ul>
        {tasks.map((task) => (
          <>
            <Card sx={{ maxWidth: 345 }} key={task.id} className="mt-3" style={{ marginTop: '12px' }}>
              {/* <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {task.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
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
                onClick={() => handleDeleteTask(task.id)} size="small" style={{ marginLeft: '10px' }}
              >
                Delete
              </Button>
              </CardActions>
            </Card>
            
          </>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
