import React, {createContext} from "react";
import { Comp2 } from "./Comp2";

const FamilyChain = createContext();

export const Comp1=()=>{
    return(
        <div>
            <h1>This is component 1 - GrandFather</h1>
            <FamilyChain.Provider value={"Hello, this is Dadaji"}>
                <Comp2/>
            </FamilyChain.Provider>
        </div>
    )
}
export {FamilyChain}


//
// context api / useContext

// context
// provider  -- short and easy to write and use provider instead of consumer
// useContext


// consumer - we use in old format instead of before inventing provider - its too lengthy and complicated