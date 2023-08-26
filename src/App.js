//import './App.css';

import { Route, Routes } from "react-router-dom";
import Product from "./admin/product/Product";
import Home from "./admin/homePage/Home"
import Nav from "./admin/homePage/Nav";
import ControlPanel from "./admin/product/ControlPanel";
import Orders from "./admin/order/Orders";
import Login from "./log_to_system/Login";
import Register from "./log_to_system/Register";
import { ContextProvider} from "./contextAPI/Auth";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>

          <Route path="/"
            element={
              <>
                <Home />
                <Product />
              </>
            } />

          <Route path="product"
            element={
              <>
                <Nav />
                <ControlPanel />
              </>
            } />

          <Route path="order"
            element={
              <>
                <Nav />
                <Orders />
              </>
            } />

          <Route path="login"
            element={
              <>
                <Login />
              </>} />

          <Route path="register"
            element={
              <>
                <Register />
              </>} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
