import style from "./style.module.css";
import RightArrow from "../../assets/Images/right-arrow.png";
import { Link } from "react-router-dom";



export const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className={style.breadcrum}>
      <Link to="/">Home</Link> <img src={RightArrow} alt="rightArrow" width={15} />{" "}
      <Link to="/shop">Shop</Link>
      <img src={RightArrow} alt="rightArrow" width={15} /> <hr />
      <label>{product.title}</label>
    </div>
  );
}
