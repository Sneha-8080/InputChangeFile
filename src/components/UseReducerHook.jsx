import React, { useReducer } from "react";

const initialState={
    countOne:10
}

export const reducer=(state, action)=>{
    if(action.type == "increment" ){
        return{...state, countOne: state.countOne + action.data}
    }
    if(action.type == "decrement" ){
        return{...state, countOne: state.countOne - action.data}
    }
}

export const UseReducerHook=()=>{

    const [count, dispatch]= useReducer(reducer, initialState)

    return(
        <div className="sub">
            <h1>Use Reducer Hook</h1>
            <h2>{count.countOne}</h2>
            <button onClick={()=>dispatch({type:"increment", data:5})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement", data:5})}>Decrement</button>
        </div>
    )
}