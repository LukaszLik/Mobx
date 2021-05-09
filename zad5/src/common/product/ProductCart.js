import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const ProductCart = ({ data, add, rem }) => {
  return (
      <Grid
          container
          alignItems="center"
          direction="column"
          justify="center"
      >
      <Card variant="outlined"
      style={{minWidth: "30vw",  marginTop: "20px"}}>
          <CardContent>
              <Typography variant="h5" component="h2">
                  {data.name}
              </Typography>
              <Typography color="textSecondary">
                  opis: {data.description}
              </Typography>
              <Typography variant="body2" component="p">
                  ilosc: {data.quantity}
              </Typography>
              <Typography variant="body2" component="p">
                  cena: {data.price}
              </Typography>
          </CardContent>
      </Card>
      </Grid>
  );
};

export default ProductCart;
