import { AppBar } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const { cartItems } = useSelector((state) => state).products;

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <AppBar position="static">
      <div className="navbar">
        <Link to={"/"} style={linkStyle}>
          <div>
            <h2>Shopsey</h2>
          </div>
        </Link>
        <div onClick={handleCartClick}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
};
