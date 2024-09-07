import style from "./style.module.css";
import RightArrow from "../../assets/Images/right-arrow.png";
import logo from "../../assets/Images/main-logo.png";
import { Link } from "react-router-dom";


export default function BannerText(props) {
  return (
    <>
      <div className={style.pageTitle}>
        <img src={logo} alt="" />
        <p>{props.banText}</p>
        <p id={style.crumb}>
          <Link to="/">Home</Link> <img src={RightArrow} alt="" width={15} />{" "}
          <span>{props.banText}</span>
        </p>
      </div>
    </>
  );
}
