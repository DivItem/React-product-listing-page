import React from 'react';

function Products(props){

    const {titleTxt, PriceTxt, rating, pImage, descTxt} = props;
    return (
        <div className='product-component'>
            <div className="singleProduct">
                <img src="{pImage}" alt="image" />
                <div className="product-details">
                    <h2 className="product-title">{titleTxt}</h2>
                    <p className="price">{PriceTxt}</p>
                    <p className="rating">{rating}</p>
                    <h3 className="product-text">{descTxt}</h3>
                    <button className="product-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
