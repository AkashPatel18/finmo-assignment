import { Container, Rating, Typography, Button } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const Product = () => {
  const { state } = useLocation();

  const { id, image, title, rating, price, description } = state.product;

  return (
    <Container fixed>
      <div className="productContainer">
        <div>
          <img src={image} style={{ height: "200px", width: "400px" }} />
        </div>
        <div style={{ maxWidth: 500 }}>
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
            style={{ marginTop: 30, background: "#ff9f00", color: "white" }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </Container>
  );
};
