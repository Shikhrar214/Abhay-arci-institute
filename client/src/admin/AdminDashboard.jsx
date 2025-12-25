import React from 'react'
import { Outlet } from 'react-router'

function AdminDashboard() {
  return (
   <>
    <div>AdminDashboard</div>
    <Outlet/>
   </>
  )
}

export default AdminDashboard