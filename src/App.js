
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import CheckOut from './Components/CheckOut/CheckOut';
import Order from './Components/Order/Order';
import RequireAuth from './Components/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import AddBook from './Components/Admin/AddBook';
import ManageBook from './Components/Admin/ManageBook';


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
      <Route path="/order/:id" element={
    <RequireAuth>
        <Order/>
    </RequireAuth>
      }/>
      <Route path="/orders" element={
    <RequireAuth>
        <Orders/>
    </RequireAuth>
      }/>
      <Route path="/admin" element={
    <RequireAuth>
        <Admin/>
    </RequireAuth>
      }>
  
      </Route>
      <Route path="/addBook" element={<AddBook/>}> </Route>
      <Route path="manageBook" element={<ManageBook/>}> </Route>

   
      

     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
