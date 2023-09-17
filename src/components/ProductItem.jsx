import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        // console.log(this.props);
        let { itemProduct, onGetProductDetail, onOpenDetail, onAddToCart } =
            this.props;
        // console.log(onOpenDetail);
        // console.log(onGetProductDetail);
        return (
            <>
                <div className="card mt-3" style={{ width: "20rem" }}>
                    <img
                        src={itemProduct.image}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{itemProduct.name}</h5>
                        <p className="card-text">Price: {itemProduct.price}$</p>
                        <button
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                                onGetProductDetail(itemProduct);
                                onOpenDetail();
                            }}
                        >
                            View Detail
                        </button>
                        <button
                            className="btn btn-success ms-2"
                            onClick={() => {
                                onAddToCart(itemProduct);
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
