import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LoginProvider } from "./Context/login";
import "./App.css";

import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TasksFormPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Aside } from "./components/Aside";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <div
          id="app"
          className="relative h-screen w-full p-2 gap-4 bg-zinc-950"
        >
          <aside className="[grid-area:aside] overflow-y-auto bg-zinc-900 rounded-xl border-2 border-zinc-800">
            <Aside />
          </aside>
          <main className="[grid-area:main] bg-zinc-900 rounded-xl border-2 border-zinc-800 overflow-y-auto">
            <Navigation />
            <Routes>
              <Route path="/" element={<Navigate to="/tasks" />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/tasks-create" element={<TasksFormPage />} />
              <Route path="/tasks/:id" element={<TasksFormPage />} />
            </Routes>
          </main>
          <LoginPage />
          <RegisterPage />
          <Toaster />
        </div>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
