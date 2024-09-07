import  { useContext, useState } from 'react'
import style from "./style.module.css";
import star from '../../assets/Images/star.png'
import halfStar from "../../assets/Images/halfstar.png";
import emptyStar from "../../assets/Images/emptystar-.png"
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const [ item, setItem]  = useState(1);
    const {product} = props;
  const { addToCart} = useContext(ShopContext);
  
  const increaseQuantity = () => {
    setItem((prevItem) => prevItem + 1);
  };

  const decreaseQuantity = () => {
    if (item > 1) {
      setItem((prevItem) => prevItem - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id, item);
  };



const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className={style.productdisplayRightStars}>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <img key={index} src={star} alt="full star" width={60} />
        ))}
      {hasHalfStar && <img src={halfStar} alt="half star" width={60} />}
      {Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))
        .fill()
        .map((_, index) => (
          <img key={index} src={emptyStar} alt="empty star" width={60} />
        ))}
    </div>
  );
};



    
  return (
    <div className={style.productDisplayDiv}>
      <div className={style.productdisplay}>
        <div className={style.productdisplayLeft}>
          <div className={style.productdisplayImgList}>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className={style.productdisplayImg}>
            <img
              className={style.productdisplayMainImg}
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className={style.productdisplayRight}>
          <h1>{product.title}</h1>

          <div className={style.productdisplayRightPrices}>
            ${product.price}
          </div>
          <div className={style.rightStars}>
            {renderStars(product.rating.rate)}
            {/* <div className={style.productdisplayRightStars}>
            <img src={star} alt="" width={60} />
            <img src={star} alt="" width={60} />
            <img src={star} alt="" width={60} />
            <img src={star} alt="" width={60} />
            <img src={emstar} alt="" width={60} />
          </div> */}
            <hr />
            <label>{product.rating.count} Customer Review</label>
          </div>
          <div className={style.produductRightDescription}>
            {product.description}
          </div>
          <div className={style.addCartDiv}>
            <div className={style.productQuan}>
              <label onClick={decreaseQuantity}>-</label>
              <p>{item}</p>
              <label onClick={increaseQuantity}>+</label>
            </div>
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>
          <p className={style.produductRightCategory}>
            <span>Ctegory : {product.category} </span>
          </p>
        </div>
      </div>
      <div className={style.descriptionbox}>
        <div className={style.descriptionboxNavigator}>
          <div className={style.descriptionboxNavBox}>Description</div>
        </div>
        <div className={style.descriptionboxDescription}>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
