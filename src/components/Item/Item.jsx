import style from "./style.module.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";


const Item = (props) => {
  
  return (
    <div className={style.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="product" />
        <div className={style.overlay}>
          <button
            
            className={style.addToCart}
          >
            Add to cart
          </button>
        </div>
        <div className={style.itemsDiv}>
          <p>{props.name}</p>
          <div className={style.itemCategory}>{props.category}</div>
          <div className={style.itemPriceN}>${props.price}</div>
        </div>
      </Link>
    </div>
  );
}
export default Item;