import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export const Todo=()=>{
    const[text, setText]= useState("Pune");   //textfield
    const[list, setList]=useState([]);  
    const[indexNum, setIndexNum]=useState("are you sure, you want to edit this text")
    const[isEdit, setIsEdit]=useState(false)

    const handleAdd=()=>{
        if(isEdit===true){
            list.splice(indexNum,1,text)
            setText("")
            setIndexNum(null)
            setIsEdit(false)
        }else if(text){
            setList([...list, text])
            setText("")
        }
    }

    const handleDelete=(index)=>{
        console.log(index);
        const filtered = list.filter(( ind)=> ind != index )
        console.log(filtered)
        setList(filtered)
    }

    const handleEdit=(item,index)=>{
        // alert("hello..")
        setText(item)
        setIndexNum(index)
        setIsEdit(true)
        alert(indexNum)
    }

    return(
     <React.Fragment>
        <h1>Crud Operation:</h1>
        <Grid container={3}>
            <Grid item xs={12}>
                <TextField type="text" label="Enter name" value={text} onChange={(e)=>setText(e.target.value)} fullWidth/>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={3}>{isEdit?
            (<Button onClick={handleAdd} fullWidth>Add</Button>):(<Button onClick={handleAdd} fullWidth>Add</Button>)}  
            </Grid>
            {/* ----------------------------- or -------------------- */}
            <Grid item xs={4}>
                <Button onClick={handleAdd} style={{backgroundColor: isEdit? "green":""}} fullWidth>{isEdit?"Update": "Add"}</Button>
            </Grid>

            {list.map((item,index)=>{
                return(
                    <div>
                        <h1>{item}</h1>
                        <Grid item xs={6}>
                            <Button variant="contained" onClick={()=>handleDelete(index)}>Delete</Button>
                        </Grid> <br />

                        <Grid item xs={6}>
                            <Button variant="contained" onClick={()=>handleEdit(item,index)}>Edit</Button>
                        </Grid>

                    </div>
                )
            })}
        </Grid>
     </React.Fragment>
    )
}