import React from 'react';
import { products } from './data';

class Product extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>Product name:{this.props.name}</div>
            <p>price:{this.props.price}</p>
          </div>
        </div>
        <div>
          <img src={this.props.productImageUrl} />
        </div>
      </div>
    );
  }
}