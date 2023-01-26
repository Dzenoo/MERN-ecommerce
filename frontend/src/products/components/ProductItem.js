import React from "react";

import Button from "../../shared/components/Form/Button";
import "./ProductItem.css";

// Product card
const ProductItem = (props) => {
  const { id, image, title, price, category } = props;

  return (
    <li className="item">
      <div className="item__image">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/${image}`} alt={title} />
      </div>

      <div className="item__text">
        <p>{category}</p>
        <h1>{title}</h1>
      </div>

      <div className="item__footer">
        <span>
          <p>{price} DIN</p>
        </span>

        <Button to={`/products/${id}`}>Vidi vise</Button>
      </div>
    </li>
  );
};

export default ProductItem;
