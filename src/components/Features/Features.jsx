import style from "./style.module.css";
import trophy from "../../assets/Images/trophy.png";
import guarantee from "../../assets/Images/guarantee.png";
import shipping from "../../assets/Images/shipping.png";
import customerSupport from "../../assets/Images/customer-support.png";

const features = [
  {
    image: trophy,
    title: "High Quality",
    des: "crafted from top materials",
  },
  {
    image: guarantee,
    title: "Warranty Protection",
    des: "Over 2 years",
  },
  {
    image: shipping,
    title: "Free Shipping",
    des: "Order over 150 $",
  },
  {
    image: customerSupport,
    title: "24 / 7 Support",
    des: "Dedicated support",
  },
];

export default function Features() {
  return (
    <div id={style.features}>
      {features.map(({ image, title, des }, index) => (
        <div className={style.desDiv} key={index}>
          <img src={image} alt={title} />
          <div className={style.des}>
            <h2>{title}</h2>
            <label>{des}</label>
          </div>
        </div>
      ))}
    </div>
  );
}
