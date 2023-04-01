import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Users from "./pages/Users/Users";
import Categories from "./pages/Categories/Categories";
import Sidebar from './pages/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/products' element={<Products />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/users' element={<Users />} />
      <Route path='' element={<Login />} />
      <Route path='/sidebar' element={<Sidebar />} />

    <Route path='/login' element={<Login />} />
    </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
