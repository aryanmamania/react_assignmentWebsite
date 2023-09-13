import React from 'react'
import AdminNavbar from '../../components/Admin/Siderbar/AdminSider'
import UserManage from '../../components/Admin/UserMange/UserManage'

export default function UserMangePage() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <UserManage/>
    </div>
  )
}
