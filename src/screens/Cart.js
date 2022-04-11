import { Button, Container } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "./../Redux/actions/productActions";

export const Cart = () => {
  const { cartItems } = useSelector((state) => state.products);

  let absoluteProducts = {};

  let totalPrice = 0;

  for (let item of cartItems) {
    totalPrice += item.price;
    console.log(item, "bin");
    if (absoluteProducts[item.id]) {
      absoluteProducts[item.id] = {
        ...item,
        ...{ count: absoluteProducts[item.id].count + 1 },
      };
    } else {
      absoluteProducts[item.id] = {
        ...item,
        ...{ count: 1 },
      };
    }
  }

  const items = Object.values(absoluteProducts);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <Container fixed style={{ marginTop: 80 }}>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          {items.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.title.slice(0, 16)}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemove(item)}
                >
                  remove
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 100,
        }}
      >
        <p>Total Price : {totalPrice}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button style={{ background: "#fb641b", color: "white" }}>
          Check out
        </Button>
      </div>
    </Container>
  );
};
