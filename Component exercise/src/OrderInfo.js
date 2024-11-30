import React from "react";

const OrderInfo = ({ product, quantity }) => {
  const totalPrice = product.price * quantity;

  return (
    <section className="order-info">
      <h2>Order info</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{quantity}</td>
            <td>{totalPrice}€</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default OrderInfo;