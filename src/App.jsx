// start code

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import DefaultLayout from './layouts/DefaultLayout';
import TaskDetail from './pages/TaskDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
