import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/admin/Sidebar/Sidebar'
import './Home.scss'

function Home() {
  return (
    <div className='home flex'>
        <div className='Hleft'>
            <div>
              <Sidebar />
            </div>
            
        </div>
        <div className="Hright">
            <Outlet />
        </div>
    </div>
    
  )
}

export default Home