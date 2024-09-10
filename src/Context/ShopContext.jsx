import { createContext, useState, useEffect } from "react";
import AllProducts from "../assets/AllProducts";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await AllProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setCartItems(getDefaultCart());
    }
  }, [products]);

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < products.length; index++) {
      cart[products[index].id] = 0;
    }
    return cart;
  };

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({
  //     ...prev,
  //     [itemId]: prev[itemId] + 1,
  //   }));
  // };

  const addToCart = (itemId, quantity) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + quantity,
      };
      alert(`Added ${quantity} of product to the cart.`);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
      alert(`Removed 1 of product from the cart.`);
      return updatedCart;
    });
  };


  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = products.find((product) => product.id === Number(item));
  //       totalAmount += itemInfo.price * cartItems[item];
  //     }
  //   }
  //   return totalAmount;
  // };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return parseFloat(totalAmount.toFixed(2));
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

