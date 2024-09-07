import  { useContext, useState, useEffect } from 'react'
import {ShopContext} from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import  {BreadCrum}  from '../../components/BreadCrums/BreadCrum';
import { ProductDisplay } from '../../components/ProductDisplay/ProductDisplay';
import { VisibilityProvider } from '../../Context/VisibilityContext';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { CartSidebar } from '../../components/CartSidebar/CartSidebar';

export default function Product() {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  

const [product, setProduct] = useState(null); 
const [loading, setLoading] = useState(true); 

useEffect(() => {
  
  const findProduct = () => {
    const foundProduct = products.find((e) => e.id === Number(productId));
    setProduct(foundProduct);
    setLoading(false);
  };

  findProduct();
}, [productId, products]); 

if (loading) {
  return <div>Loading...</div>;
}

if (!product) {
  return <div>Product not found</div>;
}


  return (
    <VisibilityProvider>
      <div>
        <Navbar></Navbar>
        <CartSidebar></CartSidebar>
        <BreadCrum product={product} />
        <ProductDisplay product={product} />
        <Footer></Footer>
      </div>
    </VisibilityProvider>
  );
}
