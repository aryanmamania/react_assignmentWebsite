import React from 'react'
import DashboardPage from '../../components/Admin/Dashboard/Dashboard'
import AdminNavbar from '../../components/Admin/Siderbar/AdminSider'
export default function Dashboard() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <DashboardPage/>
    </div>
  )
}
