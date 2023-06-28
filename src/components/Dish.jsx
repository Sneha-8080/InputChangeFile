import React, { useState } from "react";

export const Dish=()=>{
    const[name, setName] = useState("");
    const[data, setData] = useState([])

    return(
        <div className="sub">
            <h1>Dish</h1>
            <h2>{name}</h2>
            <input onChange={(e)=>setName(e.target.value)} />
            <button onClick={()=>setData([...data, name])}>Add+</button>  {/*// [...data]==> spread operator -> used to expand an array*/}

            <br />
            {data.map(item=>(<button onClick={()=>setName(item)}>{item}</button>))}
        </div>
    )
}