import React, { useState } from "react"

export const Input = () =>{
    const [name, setName] = useState("")

    return(
        <div className="sub">
            <h1>{name}</h1>
            <input  onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}