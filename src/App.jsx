import Login from "./pages/login/login.pages";
import Register from "./pages/register/register.pages";
import Dashboard from "./pages/dashboard/dashboard.pages";
import Home from "./pages/home-page/home.pages";
import Error from "./pages/error-page/error.pages";
import Profile from "./pages/profile/profile.pages";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as styles from './styles/App.module.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return(
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}
