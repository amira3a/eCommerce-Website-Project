import { CartItems } from '../../components/CartItems/CartItems'
import BannerText from "../../components/BannerText/BannerText";


export default function Cart(props) {
  return (
    <>
      <img className="banner" src={props.banner} alt="" height={300} />
      <BannerText banText={props.banText} />
      <CartItems></CartItems>
    </>
  );
}
