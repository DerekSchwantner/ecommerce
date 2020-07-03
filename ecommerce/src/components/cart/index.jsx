import React from "react";

const items = ["camera", "tv", "radio"];

export default function Cart({ stripeToken }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
