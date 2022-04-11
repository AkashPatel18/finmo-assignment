import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { ReadMore } from "./ReadMore";

export const ProductCard = ({ productInfo }) => {
  //   console.log(productInfo);
  return (
    <Card sx={{ height: 450, width: 300 }} className={"product"}>
      <CardMedia
        component="img"
        height="200"
        width="100"
        image={productInfo.image}
        style={{ contain: "size" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <ReadMore text={productInfo.title} maxLength={15} />
        </Typography>
        <div
          style={{
            backgroundColor: "green",
            width: 40,
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            color: "white",
            padding: "3px 7px",
            alignItems: "center",
            fontSize: 13,
          }}
        >
          <div>
            {productInfo.rating.rate} <StarIcon fontSize="13" />
          </div>
        </div>
        <p>₹{productInfo.price}</p>
        <ReadMore text={productInfo.description} maxLength={80} />
      </CardContent>
    </Card>
  );
};
