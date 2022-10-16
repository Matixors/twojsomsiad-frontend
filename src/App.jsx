import Login from "./pages/login/login.pages";
import Register from "./pages/register/register.pages";
import Dashboard from "./pages/dashboard/dashboard.pages";
import Home from "./pages/home-page/home.pages";
import Error from "./pages/error-page/error.pages";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as styles from './styles/App.module.scss';

export default function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
