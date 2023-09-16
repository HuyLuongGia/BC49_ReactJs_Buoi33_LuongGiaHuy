import React, { Component } from "react";

export default class ProductDetail extends Component {
    render() {
        // console.log(this.props);
        let { shoeDetail } = this.props;
        console.log(shoeDetail);
        return (
            <>
            {shoeDetail ?  <div>
                <h2 className="mt-5">Propduct Detail</h2>
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
                        <p>Price: {shoeDetail?.price}</p>
                        <p>Description: {shoeDetail?.description}</p>
                    </div>
                </div>
            </div> : <p className="text-danger mt-5 fs-3 ">Chưa chọn sản phẩm</p>}
            
            </>
           
        );
    }
}
