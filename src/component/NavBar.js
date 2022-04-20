import { AppBar } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/actions/userActions";

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

  const dispatch = useDispatch();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static" style={{ background: "black" }}>
      <div className="navbar">
        <Link to={"/"} style={linkStyle}>
          <div>
            <h2>ShopEasy</h2>
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            onClick={handleLogout}
            style={{ marginRight: 20, cursor: "pointer" }}
          >
            LOGOUT
          </p>
          <div onClick={handleCartClick}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
      </div>
    </AppBar>
  );
};
