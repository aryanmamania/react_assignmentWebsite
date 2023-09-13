import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HostToast from "./components/Toastify/Toast";
import AdminRouter from './router/AdminRouter';
import UserRouter from './router/UserRouter';
export default function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
          <Route path={"/*"} element={<UserRouter />} />
          <Route path={"/admin/*"} element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>
      <HostToast />
    </div>
  )
}

