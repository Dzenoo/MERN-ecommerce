import React from "react";

import { useDispatch } from "react-redux";
import { FavoriteActions } from "../../shared/redux/favorite-slice";

import Card from "../../shared/components/UIelements/Card";
import Button from "../../shared/components/Form/Button";

import "./FavItem.css";

const FavItem = (props) => {
  const { id, image, title, price, inStock } = props;
  const dispatch = useDispatch();

  const removeFromFavorites = () => {
    dispatch(FavoriteActions.RemoveFromFavorite(id));
  };

  return (
    <Card className="fav_wrapper">
      <div className="fav_item">
        <img src={`http://localhost:8000/${image}`} alt={title} />
        <div className="fav_item_description">
          <h1>{title}</h1>
          <p style={{ fontWeight: "bold" }}>{price}</p>
          <p style={{ fontWeight: "bold" }}>{inStock}</p>
        </div>
        <div className="fav_actions">
          <Button danger onClick={removeFromFavorites}>
            x
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FavItem;
