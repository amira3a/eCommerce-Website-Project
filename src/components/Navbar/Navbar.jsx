import { useContext, useState } from 'react'
import style from "./style.module.css";
import logo from "../../assets/Images/logo.png"
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import cartLogo from '../../assets/Images/shopping-cart.png'
import { useVisibility } from "../../Context/VisibilityContext";


export const Navbar = () => {


  const { getTotalCartItems } = useContext(ShopContext);
  const { toggleVisibility } = useVisibility();
  return (
    <div className={style.navbar}>
      <div className={style.navLogo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className={style.navMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={toggleVisibility} className={style.loginCartLogo}>
        <img src={cartLogo} alt="" className={style.cartIcon} />
        <div className={style.cartCounter}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
