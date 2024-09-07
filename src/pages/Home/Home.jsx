import style from "./style.module.css";
import { Link } from 'react-router-dom';
import dinning from "../../assets/Images/Dinning.png"
import living from "../../assets/Images/Living.png";
import bedroom from "../../assets/Images/Bedroom.png";

export default function Home(props) {

  



  return (
    <div>
      <img className="banner" src={props.banner} alt="" height={300} />
      <div id={style.categories}>
        Categories
        <div id={style.categoryLinks}>
          <div
            className={style.categoryLink}
          >
            <Link to="dining">
              <img src={dinning} />
            </Link>
            Dinnig
          </div>
          <div className={style.categoryLink}>
            <Link to="living">
              <img src={living} />
            </Link>
            Living
          </div>
          <div className={style.categoryLink}>
            <Link to="bedroom">
              <img src={bedroom} />
            </Link>
            Bedroom
          </div>
        </div>
      </div>
    </div>
  );
}
