import React, { useState } from "react";

export const Fruit=()=>{
    const[name, setName]=useState("")

    return(
        <div className="sub">
            <h1>Fruits:</h1>

            <h2>{name}
            <img src={"public/" +name+ ".jpeg"} alt={name} width={"150px"}/>
            </h2>

            <button onClick={()=>setName("Apple")}>Apple</button>
            <button onClick={()=>setName("Kiwi")}>Kiwi</button>
            <button onClick={()=>setName("Banana")}>Banana</button>
            <button onClick={()=>setName("Mango")}>Mango</button>
        </div>
    )
}