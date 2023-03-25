import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import AddProducts from "./pages/AddProducts/addproducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UpdateProducts from "./pages/UpdateProducts/updateproducts";
import DeleteProducts from "./pages/DeleteProducts/deleteproducts";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/add' element={<AddProducts />} />
      <Route path='/update' element={<UpdateProducts />} />
      <Route path='/delete' element={<DeleteProducts />} />

    <Route path='/login' element={<Login />} />
    </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
