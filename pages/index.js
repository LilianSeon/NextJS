import { useState, useEffect } from "react";
import commerce from "../lib/commerce";

import Menu from "../components/Menu";
import HeroSlider from "../components/homepage/HeroSlider";
import BannerThreeColumn from "../components/homepage/BannerThreeColumn";
import ProductTab from "../components/homepage/ProductTab";



const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
      <div className="home-three">
        <Menu/>
        <HeroSlider/>
        <BannerThreeColumn/>
        <ProductTab products={products}/>
        <div className="">
          {
          /*products.map((product) => {
            return <Product key={product.id} product={product} />;
          })*/
          }
        </div>
      </div>
  );
};

export default HomePage;
