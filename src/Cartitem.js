import React from "react";

function Cartitem(props) {
    return (
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.cartData.pName}</div>
                    Rs.{props.cartData.pPrice}
                </div>
                <span onClick={() =>props.remove(props.cartData) } class="badge bg-primary rounded-pill pointer">X</span>
            </li>
        </ol>
    )
}

export default Cartitem;