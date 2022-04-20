import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { ReadMore } from "./ReadMore";

export const ProductCard = ({ productInfo }) => {
  return (
    <div class="single-product">
      <div class="product-thumb">
        <img
          src={productInfo.image}
          alt=""
          style={{ height: 100, width: 100 }}
        />
      </div>
      <div class="product-title">
        <h3 style={{ fontSize: 18 }}>
          <a href="">{productInfo.title.slice(0, 50)}</a>
        </h3>
      </div>
      <div class="product-btns">
        <div class="btn-small mr-2">₹ {productInfo.price}</div>
        {/* <a href="" class="btn-round mr-2">
          <i class="fa fa-shopping-cart"></i>
        </a>
        <a href="" class="btn-round">
          <i class="fa fa-heart"></i>
        </a> */}
      </div>
      <Rating style={{ alignSelf: "center", marginTop: 10 }} />
    </div>
  );
};
