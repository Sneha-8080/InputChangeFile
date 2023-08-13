import React, {  useMemo, useState } from "react";

export const UseMemoHook=()=>{
    const[count, setCount]=useState(0);
    const[todo, setTodo]= useState([])  

    const noRender=useMemo(()=>{
        return <div>
            <h1>Count New Result:- {count}</h1>
        </div>
    },[count])

    const handleResult=()=>{
        const output= `output for result button ${count}`;  // this syntax is called "Template literals"
        setTodo([...todo, output])    // spread operator for expanding the values or elemnts in an array

    }


    return(
        <div className="sub">
            <h1>Use memo hook</h1>
            <h3>Original Count:- {count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <br /><br />
         
         {noRender}
            {
                todo.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h1>{item}</h1>
                        </div>
                    )
                })
            }

            {/* <button onClick={()=>setTodo([...todo, "Task"])}>Result</button> */}
            <button onClick={handleResult}>Result</button>
        </div>
    )
}


















// import React, { useMemo, useState } from "react";

// export const UseMemoHook = () => {
//   const [count, setCount] = useState(0);
//   const [todo, setTodo] = useState([]);
//   const [originalCountOutput, setOriginalCountOutput] = useState(null);

//   const newResult = useMemo(() => {
//     return (
//       <div>
//         <h1>Count New Result: {count}</h1>
//       </div>
//     );
//   }, []);

//   const handleOriginalCountClick = () => {
//     const output = `Output for Original Count ${count}`;
//     setOriginalCountOutput(output);
//   };

//   const handleResultButtonClick = () => {
//     const output = `Output for Result Button ${count}`;
//     setTodo([...todo, output]);
//   };

//   return (
//     <div className="sub">
//       <h1>Use Memo Hook</h1>
//       <h3 onClick={handleOriginalCountClick}>Original Count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <br />
//       <br />

//       {originalCountOutput && <div>{originalCountOutput}</div>}

//       {/* {newResult} */}

//       {todo.map((item, index) => (
//         <div key={index}>
//           <h1>{item}</h1>
//         </div>
//       ))}

//       <button onClick={handleResultButtonClick}>Result</button>
//     </div>
//   );
// };
