import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { MovieCartContext } from "../../contexts/MovieCartContextProvider";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: -3,
    border: `${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CustomizedBadges({ onOpen }) {
  const { addMovie, setAddMovie } = useContext(MovieCartContext);
  // console.log("addMovie", addMovie);
  return (
    <IconButton aria-label="cart" onClick={onOpen}>
      <StyledBadge badgeContent={addMovie.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
