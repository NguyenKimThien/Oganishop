
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./routers/router";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </CartProvider>
     
  );
}

export default App;
