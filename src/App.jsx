// start code

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}
