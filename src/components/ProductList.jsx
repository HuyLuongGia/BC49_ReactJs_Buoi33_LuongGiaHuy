import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
    handleProductDetail = (product) => {
        // console.log(product);
        this.props.onGetProductDetail(product);
    };

    handleOpenModalDetail = () => {
        this.props.onOpenModalDetail();
    };

    handleAddToCartFromItem = (product) => {
        this.props.onAddToCart(product);
    };

    render() {
        // console.log(this.props);
        let { listProduct } = this.props;
        // console.log(listProduct);
        return (
            <div className="row">
                {listProduct.map((item, index) => {
                    return (
                        <div className="col-4" key={item.id}>
                            <ProductItem
                                itemProduct={item}
                                onGetProductDetail={this.handleProductDetail}
                                onOpenDetail={this.handleOpenModalDetail}
                                onAddToCart={this.handleAddToCartFromItem}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}
