import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import ProductForm from "./ProductForm";
import OrderInfo from "./OrderInfo";

const products = [
  { id: 1, name: "AMD Ryzen 5 3600", price: 245 },
  { id: 2, name: "Intel Core i5-12400", price: 200 },
  { id: 3, name: "AMD Ryzen 7 5800X", price: 399 },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(0, prev + amount));
  };

  return (
    <div className="app">
      <Header />
      <main>
        <ProductForm
          products={products}
          selectedProduct={selectedProduct}
          quantity={quantity}
          onProductChange={handleProductChange}
          onQuantityChange={handleQuantityChange}
        />
        <OrderInfo
          product={selectedProduct}
          quantity={quantity}
        />
      </main>
    </div>
  );
};

export default App;