
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/Login/RequireAuth';

function App() {
  return (
    <div >
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/checkout/:id" element={
    <RequireAuth>
        <CheckOut/>
    </RequireAuth>
      }/>

     </Routes>
    </div>
  );
}

export default App;
