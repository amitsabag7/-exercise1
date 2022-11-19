import React from 'react';
import './Product.css';
 import { Component } from 'react';

export default class Product extends Component {
  render() {
  return (
    <div>
      <div>        
        <div className='product-details'>
          <div>
            Product name:{this.props.name}
          </div>
            <p>price:{this.props.price}</p>
          </div>
      </div>
      <div className='product-image'>
        <img src={this.props.productImageUrl} alt="" />        
      </div>
    </div>
  );
  }
}