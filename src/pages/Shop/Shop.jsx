import style from "./style.module.css";
import Item from "../../components/Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useState } from "react";
import BannerText from "../../components/BannerText/BannerText"


export default function Shop(props) {
  const { products } = useContext(ShopContext);
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 8;

const totalPages = Math.ceil(products.length / productsPerPage);
const startIndex = (currentPage - 1) * productsPerPage;
const selectedProducts = products.slice(
  startIndex,
  startIndex + productsPerPage
);


  return (
    <div>
      <img className="banner" src={props.banner} alt="banner" height={300} />
      <BannerText banText={props.banText} />
      <div className={style.shopCategoryProducts}>
        {selectedProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.title}
              image={item.image}
              category={item.category}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
      <div className={style.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            id={currentPage === index + 1 ? style.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
