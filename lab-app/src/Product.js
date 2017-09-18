import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, quantity, onAdd }) => {
  const callToAction = quantity < 5 ?
   <p className="action">Only {quantity} left in stock! Act Fast!</p> : null;

  return (
    <div>
      <h1>{name}</h1>
      {/*
      <dl>
        <dt>Price</dt><dd>${price}</dd>
        <dt>Quantity</dt><dd>{quantity}</dd>
      </dl>
      */}
      <p>Click <button
        onClick={() => onAdd(name)}>here</button>
        to buy this awesome {name} at ${price}!
      </p>
      {callToAction}
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default Product;



// import React from 'react';
//
// const Product = ({name, price, quantity, description}) => {
//
//
// const productButton = Product ? <button>addToCart</button> : null;
//     return (
//       <div>
//       <h3>{name} {productButton}</h3>
//       <dl>
//         <dt>Price:</dt><dd>{price}</dd>
//         <dt>Quantity:</dt><dd>{quantity}</dd>
//         <dt>Description:</dt><dd>{description}</dd>
//       </dl>
//       </div>
//     );
//   };
//
// export default Product;
