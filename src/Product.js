import React from 'react';
import './Product.css';

export default function Product() {
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
        <img src={this.props.productImageUrl} />        
      </div>
    </div>
  );
}