import style from "./style.module.css";
import { useContext } from 'react';
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from "../../assets/Images/remove-icon.png";


export const CartItems = () => {
    
    const { getTotalCartAmount, products, cartItems, removeFromCart } =
      useContext(ShopContext);
    return (
      <div className={style.cartitems}>
        <div className={style.topCart}>
          <div className={style.cartitemsFormatMain}>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr />
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
                    <p>{e.title}</p>
                    <p>${e.price}</p>
                    <button className={style.cartitemsQuantity}>
                      {cartItems[e.id]}
                    </button>
                    <p id={style.totalPrice}>${e.price * cartItems[e.id]}</p>
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
            <h1>Cart Totals</h1>
            <div className={style.totalItemDiv}>
              <div className={style.cartitemsTotalItem}>
                <h3>Subtotal</h3>
                <p>${getTotalCartAmount()}</p>
              </div>
              
              <div className={style.cartitemsTotalItem}>
                <h3>Total</h3>
                <h4>${getTotalCartAmount()}</h4>
              </div>
            </div>
            <button>CHECK OUT</button>
          </div>
        </div>
      </div>
    );
}
