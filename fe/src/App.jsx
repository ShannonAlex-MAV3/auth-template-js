import { Route, Routes } from 'react-router'
import Welcome from './pages/welcome'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Dashboard from './pages/app/dashboard'
import Home from './pages/app/home'
import ProtectedRoute from './utils/protected-route'

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route path='auth'>
        <Route path='login' element={<Login />} />
        <Route path='sign-up' element={<Register />} />
      </Route>

      <Route element={
        <ProtectedRoute isAllowed={false}>
          <Dashboard/>
        </ProtectedRoute>
      }>
        <Route path='home' element={<Home />}/>
      </Route>

      <Route path="*" element={<p>There&rsquo;s nothing here: 404!</p>} />
    </Routes>
  )
}

export default App
