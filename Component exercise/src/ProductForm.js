import React from "react";

const ProductForm = ({
  products,
  selectedProduct,
  quantity,
  onProductChange,
  onQuantityChange,
}) => (
  <section className="product-selection">
    <h2>Select product</h2>
    <label>
      Product:
      <select
        value={selectedProduct.id}
        onChange={(e) => onProductChange(parseInt(e.target.value, 10))}
      >
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name} ({product.price}€)
          </option>
        ))}
      </select>
    </label>
    <div className="quantity-controls">
      <button onClick={() => onQuantityChange(-1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => onQuantityChange(1)}>+</button>
    </div>
  </section>
);

export default ProductForm;