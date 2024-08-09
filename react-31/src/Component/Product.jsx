import React, { Component, Fragment } from 'react'
import Cart from './Cart';

export class Product extends Component {
    product;
    constructor(props) {
        super(props)
        this.product = {
            eid: 301,
            ename:"Arjun",
            esal:23000,
            color:["Red", "Blue", "Green"],
            image:"https://i.pinimg.com/736x/98/58/74/9858745cd157f2797065e639c5b3bf23.jpg"
        }
    }
  render() {
    return (
      <Fragment>
        <h2>Product Component</h2>
        <hr />
        <Cart product={this.product}/>
      </Fragment>
    )
  }
}

export default Product