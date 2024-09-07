
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { CartSidebar } from '../../components/CartSidebar/CartSidebar'
import { VisibilityProvider } from "../../Context/VisibilityContext";
import Features from '../../components/Features/Features';

export default function 
() {
  return (
    <VisibilityProvider>
      <div>
        <Navbar></Navbar>
        <CartSidebar></CartSidebar>
        <Outlet />
        <Features></Features>
        <Footer></Footer>
      </div>
    </VisibilityProvider>
  );
}
