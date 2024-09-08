import style from "./style.module.css";
import { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/Images/sideRemove.png";
import { Link, useNavigate } from "react-router-dom";
import close_icon from "../../assets/Images/close-icon.png";
import { useVisibility } from "../../Context/VisibilityContext";

export const CartSidebar = () => {
  const { getTotalCartAmount, products, cartItems, removeFromCart } =
    useContext(ShopContext);

  const { isVisible, toggleVisibility } = useVisibility();
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleVisibility();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, toggleVisibility]);

  if (!isVisible) {
    return null;
  }

  const handleCartButtonClick = () => {
    toggleVisibility();
    navigate("/cart");
  };

  return (
    <div
      ref={sidebarRef}
      className={`${style.cartitems} ${
        isVisible ? style.cartitemsVisible : ""
      }`}
    >
      <div className={style.cartitemsCloseIcon} onClick={toggleVisibility}>
        <img src={close_icon} alt="Close" />
      </div>
      <div className={style.cartitemsFormatMain}>Shopping Cart</div>
      <hr className={style.hr} />

      <div className={style.cartitemsScrollable}>
        {products.map((e, id) => {
          const quantity = cartItems[e.id] || 0;

          if (quantity > 0) {
            return (
              <div key={id}>
                <div
                  className={`${style.cartitemsFormat} ${style.cartitemsFormatMain}`}
                >
                  <img
                    src={e.image}
                    alt=""
                    className={style.carticonProductIcon}
                  />
                  <div className={style.subProduct}>
                    <p className={style.title}>{e.title}</p>
                    <div className={style.subProductTop}>
                      <p className={style.cartitemsQuantity}>
                        {cartItems[e.id]}
                      </p>
                      <p className={style.cartitemsQuantityx}>x</p>
                      <p className={style.cartitemsQuantityprise}>${e.price}</p>
                    </div>
                    <div className={style.cartitemsQuantityTO}>
                      <p>=</p>
                      <p>${e.price * cartItems[e.id]}</p>
                    </div>
                  </div>
                  <img
                    src={remove_icon}
                    className={style.cartitemsRemoveIcon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                    width={30}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className={style.cartitemsDown}>
        <div className={style.cartitemsTotal}>
          <p>Subtotal</p>
          <label>${getTotalCartAmount()}</label>
        </div>
        <div className={style.cartBut}>
          <button onClick={handleCartButtonClick}>Cart</button>
        </div>
      </div>
    </div>
  );
};