import React from "react";
function Product(props) {
    return (
        <div className='col-lg-3 mb-3'>
            <div className='card' style={{ width: '18rem' }}>
                <img src='https://via.placeholder.com/200x150' className='card-img-top'></img>
                <div className='card-body'>
                    <h5 className='card-tittle'>{props.data.pName}</h5>
                    {
                        props.data.stock==true?<span>In stock</span> : <span>Out of stock</span>
                    }
                    <p className='card-text'>Price : {props.data.pPrice}</p>
                    <button disabled={!props.data.stock} onClick={()=> props.sp(props.data)} className='btn btn-primary'>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default Product;