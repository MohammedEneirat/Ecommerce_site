//import './App.css';

import { Route, Routes } from "react-router-dom";
import Product from "./admin/product/Product";
import Home from "./admin/homePage/Home"
import Nav from "./admin/homePage/Nav";
import ControlPanel from "./admin/product/ControlPanel";

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/"
        element={
        <>
        <Home/>
        <Product/>
        </>
    }/>
      
      <Route path="product"
        element={
        <>
        <Nav/>
        <ControlPanel/>
        </>
    }/> 
      
      </Routes>
    </div>
  );
}

export default App;
