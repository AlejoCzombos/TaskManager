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
          <aside
            id="aside"
            className="[grid-area:aside] aside overflow-y-auto bg-zinc-900 rounded-xl border-2 border-zinc-800 z-20"
          >
            <Aside />
          </aside>
          <main className="[grid-area:main] main bg-zinc-900 rounded-xl border-2 border-zinc-800 overflow-y-auto relative z-0">
            <MenuIcon
              id="menu-button"
              className=" md:hidden absolute left-3 top-3 size-16 fill-slate-200 bg-slate-700/90 z-10 p-4 rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={() => {
                document.getElementById("aside").classList.toggle("open");
                document.addEventListener("click", function (event) {
                  var aside = document.getElementById("aside");
                  var menuButton = document.getElementById("menu-button");
                  var isClickInsideAside = aside.contains(event.target);
                  var isClickInsideMenuButton = menuButton.contains(
                    event.target
                  );

                  if (!isClickInsideAside && !isClickInsideMenuButton) {
                    aside.classList.remove("open");
                  }
                });
              }}
            />
            <Navigation />
            <Routes>
              <Route path="/" element={<Navigate to="/tasks/all" />} />
              <Route path="/tasks/:filter" element={<TasksPage />} />
              <Route path="/tasks-create" element={<TasksFormPage />} />
              <Route path="/tasks-edit/:id" element={<TasksFormPage />} />
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

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}
