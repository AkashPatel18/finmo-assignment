import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../Redux/actions/productActions";
import { ProductCard } from "./../Component/ProductCard";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state).products;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleProductClick = (product) => {
    navigate(`product/${product.id}`, product);
  };

  return (
    <Container fixed style={{ marginTop: "80px" }}>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        spacing={5}
        rowSpacing={5}
        columnSpacing={{ xs: 4, sm: 8, md: 12 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.map((product) => {
          return (
            <Grid
              onClick={() => handleProductClick(product)}
              justifyContent="center"
              alignItems="center"
              key={product.id}
              item
              style={{ cursor: "pointer" }}
            >
              <ProductCard productInfo={product} key={product.id} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
