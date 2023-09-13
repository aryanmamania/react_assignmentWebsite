import React from 'react'
import AdminNavbar from '../../components/Admin/Siderbar/AdminSider'
import BookingMange from '../../components/Admin/BookingMange/BookingMange'
export default function BookingPage() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <BookingMange/>
    </div>
  )
}
