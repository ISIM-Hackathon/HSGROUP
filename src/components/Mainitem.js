import React from 'react'
import {useState} from 'react'

export default function Mainitem({ item }) {
     const [Quantity , setQuantity]  = useState(1); 
     const [varient , setVarient] = useState("small"); 
     return (
        <div style={{margin:"50px", overflow:"hidden"}} className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 style={{fontSize:'20px'}}>{item.name}</h1>
            <img src={item.image} alt="..." className="img-fluid" style={{ width: "180px", height: "180px" }} />
            < div className="flex-container">
                <div className="w-100">
                    <p>varient</p>
                    <select value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
                        {item.variants.map((variant) => (
                            <option value={variant} className="text-center">{variant}</option>
                        ))}
                    </select>
                </div>
                <div className="w-100">
                        <p>Quantity</p>
                        <select value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                            {
                             [...Array(10).keys()].map((x, i) =>{
                                 return <option value={i+1} className="text-center form-control">{i+1}</option>
                             })   
                            }
                        </select>
                    </div>
                    </div>
                    <div className="flex-container">
                        <div className="w-100 my-2">
                               <p>price : {item.prices[0][varient] * Quantity} Rs/-</p>
                        </div>
                        <div className="w-100">
                            <button className="btn btn-danger my-1">Add to card</button>
                        </div>
                    </div>
               
            </div>
    )
  
}
