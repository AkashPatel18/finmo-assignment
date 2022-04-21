import {
  Container,
  Rating,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/productActions";
import axios from "axios";
import { BASE_URL } from "./../Utils/api";
import StarIcon from "@mui/icons-material/Star";

export const Product = () => {
  const { state } = useLocation();

  const { id } = state.product;

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    // setLoading(true);
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();

    return () => {
      setProduct({});
    };
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    alert("product is added to cart");
    dispatch(addToCart(state.product));
  };

  console.log(product);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          height: "70vh",
        }}
      >
        <CircularProgress color="inherit" />
      </div>
    );

  return (
    <Container fixed>
      <div
        style={{
          display: "flex",

          justifyContent: "space-around",

          marginTop: 70,
        }}
      >
        <div className="des-product">
          <img
            src={product.image}
            style={{ height: "200px", width: "400px" }}
          />
        </div>
        <div className="des-product">
          <h6 style={{ fontSize: 20 }}>{product.title}</h6>
          <p style={{ color: "grey" }}>{product.category}</p>
          <Rating
            readOnly
            style={{ marginTop: 10 }}
            defaultValue={product.rating.rate}
            icon={<StarIcon style={{ color: "black" }} />}
          />
          <p style={{ marginTop: 20 }}>{product.description}</p>
          <button
            onClick={handleAddToCart}
            style={{
              background: "black",
              color: "white",
              padding: "10px 20px",
              marginTop: 30,
              pointer: "cursor",
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </Container>
  );
};
