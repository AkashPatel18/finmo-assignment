import { Button, Container } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increamentProduct,
  removeProduct,
  decreamentProduct,
} from "../Redux/actions/productActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

  const incItem = (product) => {
    dispatch(increamentProduct(product));
  };

  const decItem = (product) => {
    dispatch(decreamentProduct(product));
  };

  return (
    <Container fixed style={{ marginTop: 80 }}>
      <div className="cartContainer">
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

                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <AddIcon
                      onClick={() => incItem(item)}
                      style={{ color: "white", background: "black" }}
                    />
                    {item.count}
                    <RemoveIcon
                      onClick={() => incItem(item)}
                      style={{ color: "white", background: "black" }}
                    />
                  </div>
                </td>

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
        <h6 style={{ fontSize: 20 }}>
          Total Price : {parseFloat(totalPrice.toFixed(2))}
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          // onClick={handleAddToCart}
          style={{
            background: "black",
            color: "white",
            padding: "10px 20px",
            marginTop: 30,
            pointer: "cursor",
          }}
        >
          CHECKOUT
        </button>
      </div>
    </Container>
  );
};
