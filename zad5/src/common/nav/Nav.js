import React from "react";
import "./Nav.css";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import Badge from "@material-ui/core/Badge";

const Nav = () => {
  return (
    <nav>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ minHeight: "9vh", background: "rgb(255, 255, 255)" }}
      >
        <Grid
          container
          justify="flex-start"
          item
          xs={8}
          style={{ paddingLeft: "25px" }}
        >
          <Link to="/" className="logo">
            Home
          </Link>
        </Grid>

        <Grid
          container
          justify="flex-end"
          item
          xs={4}
          style={{ paddingRight: "25px" }}
        >
          <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              component={Link}
              to="/add"
          >
            <span>dodaj produkt</span>
          </Button>

          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/card"
            startIcon={
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            }
            style={{ marginRight: "20px" }}
          >
            <span>koszyk</span>
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Nav;
