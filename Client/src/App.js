import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import './App.css';
import {Home} from './Pages/Home/Home'
import { About } from "./Pages/About/About";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { Product } from "./Pages/Product/Product";
import { Cms } from "./Pages/CMS/Cms";
import { Pids } from "./Pages/PIDS/Pids";
import { Blog } from "./Pages/Blog/Blog";
import { Jobs } from "./Pages/Jobs/Jobs";
import { Support } from "./Pages/Support/Support";

import {AdminLogin} from "./Pages/Admin/AdminLogin";
import {Admin} from "./Pages/Admin/Admin";
import {AdminProduct} from "./Pages/Admin/AdminProduct";
import { AddProduct } from './Pages/Admin/AddProduct';
import { UpdateProduct } from "./Pages/Admin/UpdateProduct";
import { ViewProduct } from "./Pages/Admin/ViewProduct";

function App() {

  return (
    <Router >
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/products"  element={<Product/>} />
        <Route path="/productsDetails"  element={<ProductDetails/>} />
        <Route path="/blog"  element={<Blog/>} />
        <Route path="/jobs"  element={<Jobs/>} />
        <Route path="/support"  element={<Support/>} />
        <Route path="/cms"  element={<Cms/>} />
        <Route path="/pids"  element={<Pids/>} />

        <Route path="/adminLogin"  element={<AdminLogin/>} />
        <Route path="/adminLogin/adminMainPage"  element={<Admin/>} />
        <Route path="/adminLogin/adminMainPage/adminProduct"  element={<AdminProduct/>} />
        <Route path="/adminLogin/adminMainPage/adminProduct/addProduct"  element={<AddProduct/>} />
        <Route path="/adminLogin/adminMainPage/adminProduct/updateProduct/:id"  element={<UpdateProduct/>} />
        <Route path="/adminLogin/adminMainPage/adminProduct/viewProduct/:id"  element={<ViewProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
