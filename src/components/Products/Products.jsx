import React, {useState, useEffect} from 'react';
import fetchProducts from '../../api/fetchProducts.js';

import './Products.css';

function Products() {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);

    });
  }, []);

  console.log(products);
  return ( 
    <section className="products container">
        products
    </section>
  );

}
export default Products;
