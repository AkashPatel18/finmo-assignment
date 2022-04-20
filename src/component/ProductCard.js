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
// import StarIcon from "@mui/icons-material/Star";
import { ReadMore } from "./ReadMore";
import StarIcon from "@mui/icons-material/Star";
import { Star } from "@mui/icons-material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",

//     "& > * + *": {
//       marginTop: theme.spacing(1),
//     },
//   },
//   emptyStar: {
//     color: "black",
//   },
// }));

export const ProductCard = ({ productInfo }) => {
  console.log(productInfo);
  // const classes = useStyles();

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
          <a href="">{productInfo.title.slice(0, 20)}</a>
        </h3>
      </div>
      <div class="product-btns">
        <div class="btn-small mr-2">₹ {productInfo.price}</div>
      </div>
      <Rating
        readOnly
        style={{ alignSelf: "center", marginTop: 10 }}
        defaultValue={productInfo.rating.rate}
        icon={<StarIcon style={{ color: "black" }} />}
      />
    </div>
  );
};
