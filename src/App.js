import "./index.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from "./pages/register";
import Find from "./pages/find";
import Order from "./pages/mypage/order";
import Cancel from "./pages/mypage/cancel";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/find' element={<Find />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order/cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
