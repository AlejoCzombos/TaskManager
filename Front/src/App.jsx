import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import {Navigation} from "./components/Navigation"
import {Toaster} from 'react-hot-toast'

import {TasksPage} from './pages/TasksPage'
import {TasksFormPage} from './pages/TasksFormPage'
import {Navbar} from "./components/Navbar"

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks"/>}/>
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/tasks-create" element={<TasksFormPage/>} />
          <Route path="/tasks/:id" element={<TasksFormPage/>} />
        </Routes>
        <Toaster/>
    </BrowserRouter>
  )
}

export default App
