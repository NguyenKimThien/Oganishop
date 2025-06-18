import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";

const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
     
    </div>
  );
};

export default MainLayout;
