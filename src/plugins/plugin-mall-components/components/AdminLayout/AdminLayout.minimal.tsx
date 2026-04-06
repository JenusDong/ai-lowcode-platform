import React from 'react'
import type { AdminLayoutProps } from './types'
import './AdminLayout.scss'

const AdminLayout: React.FC<AdminLayoutProps> = ({
  style,
  className,
}) => {
  return (
    <div className={`admin-layout ${className || ''}`} style={style}>
      <h1>AdminLayout Test - Minimal Version</h1>
      <p>If you see this, the basic component works!</p>
    </div>
  )
}

export default AdminLayout
