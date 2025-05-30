
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./routers/router";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
