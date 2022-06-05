import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import PrivateRoute from './PrivateRoute'

import DashboardRoutes from './DashboardRoutes'
import PublicRoute from './PublicRoute'

const AppRouter
 = () => {
  return (
    <Router>
        <Routes>
            
            <Route path='/login' element={<PublicRoute><LoginScreen/></PublicRoute>}/>
        
            <Route path='/*' element={<PrivateRoute> <DashboardRoutes/> </PrivateRoute>} />

        </Routes>
    </Router>
  )
}

export default AppRouter
