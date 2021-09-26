import React from 'react';
import './cart.css'

const Cart = (props) => {
    const{cart} = props || {}
  
    let total = 0
    for(const income of  cart){
total = parseFloat(total) + parseFloat( income.yearlyIncome)
    }
    


    // cart sector
    return (
        <div className ="mt-5" >
          <h2 className ="text-center cart-title "><i className="fas fa-user-check"></i> player added: <span className = "count"> {cart.length}</span> </h2>
            <h3 className ="text-center total">total-income: <span className ="count">${total}</span> </h3>
            <ul>
            {
                cart.map(dancer => <li key = {dancer.key} className ="details-li">{dancer.name}</li>)
            }
            </ul>
            <button  className ="text-center mx-auto d-block"> <i className="fas fa-user-check"></i> Hire them</button>
        </div>
    );
};

export default Cart;