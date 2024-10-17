# Green-Cart
// pages/index.js
 import { useState, useEffect } from 'react';
 export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div>
      <h1>GreenCart - Eco-Friendly Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
 }
