import React, { useCallback, useState } from "react";
import  TodoCallbackHook  from "./TodoCallbackHook";

export const UseCallbackHook = () =>{
    const[count, setCount]= useState(0)
    const[todo, setTodo]= useState([])

    const handleCount=()=>{
        setCount(count+2)
    }

    const handleAdd=useCallback(()=>{
          setTodo((prev)=>[...prev, "Task"])
    },[])                                      // takes 2 arguments ==> arrow function and empty dependany array
    // 3 phases of component's lifecycle ==> mounting(initialPhase)==> has [] && updating(updatePhase)==> [getter] && unmounting(destroyPhase)==> has return()

    return(
        <div className="sub">
        
            <h1>Use Callback hook</h1>

            <h2>{count}</h2>
            <button onClick={handleCount}>Counter</button>

            <TodoCallbackHook todo={todo} handleAdd={handleAdd}/>
            
        </div>
    )
}    