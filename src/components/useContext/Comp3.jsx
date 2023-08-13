import React,{useContext} from "react";
import { FamilyChain } from "./Comp1";

export const Comp3=()=>{
    const message = useContext(FamilyChain)

    return(
        <div>
            <h1>This is component 3 - Grand-child</h1>
            <h2>{message}</h2>
        </div>
    )
}