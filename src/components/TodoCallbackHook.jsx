import React, {memo} from "react";  // for memorize the parent that we r doing all calculations here

 const TodoCallbackHook=({todo, handleAdd})=>{  // props receiving from parent

    return(
       <div>
        {
            todo.map((item)=>{
                return(
                    <h1>{item}</h1>
                )
            })
        }

        <button onClick={handleAdd}>Result child</button>
       </div>
    )
}
export default memo(TodoCallbackHook);  // to avoid re-render of this component if state and props doesn't change