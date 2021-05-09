import { observable, action } from "mobx";

class Shop {
  products = [
    {
      id: 1,
      name: "ziemniaki",
      description: "BIO 1kg",
      price: '3 zł',
    },
    {
      id: 2,
      name: "marchewki",
      description: "bardzo zdrowe, 1kg",
      price: '4 zł',
    },
    {
      id: 3,
      name: "buraki",
      description: "idealne na barszcz, 1kg",
      price: '5 zł',
    },
    {
      id: 4,
      name: "seler",
      description: "na rosół, 0.5kg",
      price: '2 zł',
    },
    {
      id: 5,
      name: "jajka",
      description: "20 szt.",
      price: '15 zł'
    },
  ];

  @observable
  carts = [];
  @observable
  cartOb = {};

  @action
  addToCart(id) {
    let found = false;
    this.carts.map((item) => {
      if (item.product_id === id) {
        item.quantity += 1;
        found = true;
      }
      return item;
    });
    if (!found) {
      this.carts.push({ product_id: id, quantity: 1 });
    }
    this.getCart();
  }

  @action
  getCart() {
    this.carts.map((item) => {
      for (let i in this.products) {
        if (item.product_id === this.products[i].id) {
          if (this.cartOb[item.product_id]) {
            this.cartOb[item.product_id] = {
              id: item.product_id,
              name: this.products[i].name,
              description: this.products[i].description,
              price: this.products[i].price * item.quantity,
              quantity: item.quantity
            };
          } else {
            this.cartOb[item.product_id] = {
              id: item.product_id,
              name: this.products[i].name,
              description: this.products[i].description,
              price: this.products[i].price,
              quantity: item.quantity
            };
          }
        }
      }
      return this.cartOb;
    });
  }
}

export default new Shop();
