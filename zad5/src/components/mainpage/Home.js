import { inject } from "mobx-react";
import React, { Component } from "react";
import Product from "../../common/product/Product";
import "./Home.css";

@inject("store")
class Home extends Component {
  render() {
    return (
      <grid
            className="grid">
            {this.props.store.products.map((data, index) => (
              <Product
                  data={data}
                  addToStore={this.props.store}
                  key={index}
              />
            ))}
      </grid>
    );
  }
}
export default Home;
