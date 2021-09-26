import React, { useEffect, useState } from 'react';
import Cart from '../cart/cart';
import Dancer from '../dancer/dancer';

const Main = () => {
    const[dancers,Setdancer] = useState([])
    const[cart,setcart] = useState([])

    // handle click

    const handleClick = dancer =>{
        const newcart = [...cart,dancer]
        setcart(newcart)
    }
    // loading api
    useEffect(()=>{

        fetch("./dancer.JSON")
        .then(res => res.json())
        .then(data => Setdancer(data))
    },[])
    // jsx sector
    return (
        <div>
            <div className="row ">
                <div className="col-md-9">
{

    <div className="row container ">
        {
            dancers.map(dancer =>  <Dancer key = {dancer.key} handleClick ={handleClick} dancer ={dancer}/>)
        }
    </div>
}
                </div>
                <div className="col-md-3">
                  <Cart cart ={cart}/>
                </div>
                
            </div>
        </div>
    );
};

export default Main;