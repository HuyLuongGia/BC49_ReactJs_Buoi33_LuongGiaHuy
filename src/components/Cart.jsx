import React, { Component } from "react";

export default class Cart extends Component {
    render() {
        let { onCloseCart, dataCart } = this.props;
        console.log(dataCart);
        return (
            <div className="modal" tabIndex={-1} style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping Cart</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    onCloseCart();
                                }}
                            />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr className="row">
                                        <th className="col-3">Image</th>
                                        <th className="col-5">Name</th>
                                        <th className="col-2">Price</th>
                                        <th className="col-2">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataCart.map((item, index) => {
                                        return (
                                            <tr className="row" key={index}>
                                                <td className="col-3">
                                                    <img
                                                        className="w-75"
                                                        src={item.image}
                                                        alt="imgShoe"
                                                    />
                                                </td>
                                                <td className="col-5">{item.name}</td>
                                                <td className="col-2">{item.price}$</td>
                                                <td className="col-2">...</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    onCloseCart();
                                }}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
