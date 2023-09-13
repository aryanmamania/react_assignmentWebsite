import React from 'react'
import {Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Admin/Dashboard';
import Login from '../components/Admin/AdminLogin/Login';
import UserMangePage from '../pages/Admin/UserMangePage';
import BookingPage from '../pages/Admin/BookingPage';
import AdminProtect from '../utils/ProtectorRouter/adminRouter';
export default function AdminRouter() {
  return (
    <Routes>
    <Route path="/login"element={<Login/>} />
    <Route element={<AdminProtect/>}>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/user"element={<UserMangePage/>} />
    <Route path="/booking"element={<BookingPage/>} />
    </Route>
  </Routes>
  )
}
