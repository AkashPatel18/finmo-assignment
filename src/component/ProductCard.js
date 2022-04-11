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
        <Rating
          name="half-rating-read"
          defaultValue={productInfo.rating.rate}
          precision={0.5}
          readOnly
        />
        <p>₹{productInfo.price}</p>
        <ReadMore text={productInfo.description} maxLength={80} />
      </CardContent>
    </Card>
  );
};
