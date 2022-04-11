import { Container, Rating, Typography, Button } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/productActions";

export const Product = () => {
  const { state } = useLocation();

  const { id, image, title, rating, price, description, category } =
    state.product;

  console.log(state.product);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    alert("product is added to cart");
    dispatch(addToCart(state.product));
  };

  return (
    <Container fixed>
      <div className="productContainer">
        <div>
          <img src={image} style={{ height: "200px", width: "400px" }} />
        </div>
        <div style={{ maxWidth: 500 }}>
          <p style={{ fontSize: 13, color: "grey" }}>{category}</p>
          <p style={{ fontSize: 20 }}>{title}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating.rate}
            precision={0.5}
            readOnly
          />
          <h5 style={{ fontSize: 25 }}>₹{price}</h5>
          <Typography component={"p"}>{description}</Typography>
          <Button
            onClick={handleAddToCart}
            style={{ marginTop: 30, background: "#ff9f00", color: "white" }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </Container>
  );
};
