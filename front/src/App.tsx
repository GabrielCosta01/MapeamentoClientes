import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/login';
import Register from './pages/register/register';
import { DashboardPage } from './pages/dashboard/dashboard';

function App() {
  const isAuthenticad = () => {
    const token = localStorage.getItem('token')
    if(token){
      return true
    }
    return false
  };

  return (
    <Routes>
      <Route path='/login' element={ !isAuthenticad() ? <LoginPage /> : <DashboardPage /> } />
      <Route path='/register' element={ !!isAuthenticad() ? <DashboardPage /> : <Register /> } />
      <Route path='/' element={ isAuthenticad() ? <DashboardPage /> : <LoginPage /> } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default App;