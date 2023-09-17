import React, { Component } from "react";

export default class ProductDetail extends Component {
    render() {
        // console.log(this.props);
        let { shoeDetail, onCloseModalDetail } = this.props;
        // console.log(shoeDetail);
        return (
            <>
                <div
                    id="detail_modal"
                    className="modal modal-lg"
                    tabIndex={-1}
                    style={{ display: "block" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Shoe Detail</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => {
                                        onCloseModalDetail();
                                    }}
                                />
                            </div>
                            <div className="modal-body">
                                {shoeDetail ? (
                                    <div>
                                        <h2 className="mt-5">
                                            Propduct Detail
                                        </h2>
                                        <div className="row">
                                            <div className="col-4">
                                                <img
                                                    className="w-100"
                                                    src={shoeDetail?.image}
                                                    alt="imgShoe.image"
                                                />
                                            </div>
                                            <div className="col-8 text-info">
                                                <p>Name: {shoeDetail?.name}</p>
                                                <p>
                                                    Price: {shoeDetail?.price}
                                                </p>
                                                <p>
                                                    Description:{" "}
                                                    {shoeDetail?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-danger mt-5 fs-3 ">
                                        Chưa chọn sản phẩm
                                    </p>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        onCloseModalDetail();
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
