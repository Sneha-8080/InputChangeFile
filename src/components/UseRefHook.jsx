import React, { useRef, useState } from "react";

export const UseRefHook=()=>{
    const in1 = useRef()
    const [text, setText]= useState([])

    const handleFocus=()=>{
        in1.current.focus()
    }
    const handleFocus2=()=>{
        in1.current.value= "karan"
    }
    const handleColor=()=>{
        in1.current.style.color="blue"
        in1.current.style.fontWeight="bolder"
        in1.current.style.textAlign="right"
    }
    const handleClear=()=>{
        in1.current.value=""
    }

    return(
        <div className="sub">
            <h1>useRef hook</h1>

            <input type="text" ref={in1}/>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleFocus2}>Focus2</button>
            <button onClick={handleColor}>color Text</button>
            <button onClick={handleClear}>clear</button>
        </div>
    )
}