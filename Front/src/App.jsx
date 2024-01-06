import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import './App.css'
import React, { useContext, useState } from "react";

import {TasksPage} from './pages/TasksPage'
import {TasksFormPage} from './pages/TasksFormPage'
import {LoginPage} from './pages/LoginPage'
import {RegisterPage} from './pages/RegisterPage'
import {Aside} from './components/Aside'

export const userContext = React.createContext()

function App() {

  const [openLogin, setOpenLogin] = useState(false)

  return(
    <BrowserRouter>
      <div id="app" className="relative h-screen w-full p-2 gap-4 bg-zinc-950">
        <aside className="[grid-area:aside] overflow-y-auto bg-zinc-900 rounded-xl border-2 border-zinc-800">
        <Aside/>
        </aside>
        <main className="[grid-area:main] bg-zinc-900 rounded-xl border-2 border-zinc-800">
          <Routes>
            <Route path="/" element={<Navigate to="/tasks"/>}/>
            <Route path="/tasks" element={<TasksPage/>} />
            <Route path="/tasks-create" element={<TasksFormPage/>} />
            <Route path="/tasks/:id" element={<TasksFormPage/>} />
          </Routes>
        </main>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App
