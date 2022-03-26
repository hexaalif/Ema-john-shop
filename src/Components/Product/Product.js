import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Menufacturer: {seller}</p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleClick(props.product)} className='btn'>
               <p>Add to Cart</p> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;