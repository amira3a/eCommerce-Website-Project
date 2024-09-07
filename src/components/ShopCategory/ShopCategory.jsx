import style from "./style.module.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useState } from "react";
import BannerText from "../BannerText/BannerText";

export default function Shop(props) {
  const { products } = useContext(ShopContext);
  

  return (
    <div>
      <img className="banner" src={props.banner} alt="" height={300} />
      <BannerText banText={props.banText}/>
      <div className={style.shopCategoryProducts}>
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
                description={item.description}
              />
            );
          } else {
            return null;
            // <Item
            //   key={i}
            //   id={item.id}
            //   name={item.title}
            //   image={item.image}
            //   price={item.price}
            //   description={item.description}
            // />;
          }
        })}
      </div>
      
    </div>
  );
}
