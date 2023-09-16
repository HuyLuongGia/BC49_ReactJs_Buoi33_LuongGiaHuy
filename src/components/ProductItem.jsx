import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        let { itemProduct, onGetProductDetail } = this.props;
        // console.log(onGetProductDetail);
        return (
            <>
                <img className="w-100" src={itemProduct.image} alt="imgShoe" />
                <p>{itemProduct.name}</p>
                <p className="mb-1">{itemProduct.price} $</p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        onGetProductDetail(itemProduct);
                    }}
                >
                    Add to cart
                    <i className="fa fa-shopping-cart ms-2"></i>
                </button>
            </>
        );
    }
}
