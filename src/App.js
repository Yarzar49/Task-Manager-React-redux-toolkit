import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
     <Container>
     <h1>Task Manager App</h1>
     <IconButton className="icon-button" color="inherit" onClick={toggleMode}>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<TaskForm />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
      </Routes>
     </Container>
    </div>
  );
}

export default App;
