import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.products);

  console.log(totalPrice);
  return (
    <Container fixed style={{ marginTop: 80 }}>
      <div style={{ border: "1px solid red" }}>
        <p></p>
      </div>
    </Container>
  );
};
