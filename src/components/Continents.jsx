import React, { useState } from "react";

export const Continents = ()=>{
    const[name, setName] =useState("")

    return(
        <div className="sub">
            <h1>Continent page</h1>
            <h2>{name}</h2>
            <button onClick={()=>setName("Asia")}>Asia</button>  {/*// it's called dynamic programing */}
            <button onClick={()=>setName("Africa")}>Africa</button>
            <button onClick={()=>setName("Europe")}>Europe</button>
            <button onClick={()=>setName("America")}>America</button>
        </div>
    )
};
