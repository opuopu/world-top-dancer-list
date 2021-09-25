import React from 'react';

const Cart = (props) => {
    const{cart} = props || {}
  
    let total = 0
    for(const income of  cart){
total = parseFloat(total) + parseFloat( income.yearlyIncome)
    }
    


    
    return (
        <div className ="mt-5" >
          <h2 className ="text-center "><i class="fas fa-user-check"></i> player added: {cart.length}</h2>
            <h3 className ="text-center">total-income:${total}</h3>
            <button  className ="text-center mx-auto d-block"> <i className="fas fa-user-check"></i> Hire them</button>
        </div>
    );
};

export default Cart;