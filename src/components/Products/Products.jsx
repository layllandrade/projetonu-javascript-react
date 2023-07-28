import React, {useState, useEffect} from 'react';
import fetchProducts from '../../api/fetchProducts.js';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard.jsx';

function Products() {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      console.log(products);

    });
  }, []);

  console.log(products);
  return ( 
    <section className="products container">
      <ProductCard/>
    </section>
  );

}
export default Products;
