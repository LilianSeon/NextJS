import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import commerce from "../lib/commerce";

import Product from "../components/Product";
import Menu from "../components/Menu";

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
    <div className="ui container">
      <Menu/>
      <div className="ui grid cards">
        {
          products.length ?
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })
        : () => { return(
          <Segment>
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer>

            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
        )}
        }
      </div>
    </div>
  );
};

export default HomePage;
