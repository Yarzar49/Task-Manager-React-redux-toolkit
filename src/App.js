import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import Container from '@mui/material/Container';

function App() {
  return (
    <div >
     <Container>
     <h1>Task Manager App</h1>
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
