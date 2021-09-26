import React from 'react';
import './dancer.css'

const Dancer = (props) => {
    // destructing
    const{img,height,gender,yearlyIncome,birthDate,name,rank} = props.dancer || {}
    return (
        // card
        <div className ="col-md-4 ">
         <div className="col-md-12">
    <div className="card cards h-80 border ">
      <img src={img} className="card-img-top image mx-auto" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className ="details">gender: <span>{gender}</span></p>
       <p className ="details">height: <span>{height}</span></p>
       <p className ="details">rank: <span>{rank}</span></p>
       <p className ="details">birth date: <span>{birthDate}</span></p>
       <p className ="details">yearly-income: <span className = "income">${yearlyIncome}</span></p>

        <button onClick = {()=>props.handleClick(props.dancer)}> <i className="fas fa-cart-plus"></i> add to cart</button>
    </div>
        </div>
        </div>
 
    </div>
    )


}

export default Dancer;