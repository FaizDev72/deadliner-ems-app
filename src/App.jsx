import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from "./pages/Login"
import RegisterPage from './pages/Register'
import AppLayout from './layouts/AppLayout'
import VerifyEmail from './pages/VerifyEmail'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
const router = createBrowserRouter([
  {
    path: '/',
    element: < AppLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      }, {
        path: '/register',
        element: <RegisterPage />
      }, {
        path: '/verify/email/:email',
        element: <VerifyEmail />
      }, {
        path: '/admin/dashboard',
        element: <AdminDashboard />
      }, {
        path: '/employee/dashboard',
        element: <EmployeeDashboard />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
