import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        Sidebar
      <Outlet />
    </div>
  )
}

export default AppLayout
