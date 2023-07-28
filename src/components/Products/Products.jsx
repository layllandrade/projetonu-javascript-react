import React, { useEffect, useContext} from 'react';
import fetchProducts from '../../api/fetchProducts.js';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import Loading from '../Loading/Loading.jsx';
import AppContext from '../../context/AppContext.js';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);

    });
  }, []);

  return ( 
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  );

}
export default Products;
