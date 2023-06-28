import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export const StudentList=()=>{
    const [data, setData] = useState([])   // on button click add data
    const [name, setName]= useState("")
    const [cls, setCls]= useState("")
    const [div, setDiv]= useState("")

    const handleAdd=()=>{
        const student = {}
    }


    return(
        <div className="sub">
          <h1>Student List</h1>
          <Grid container spacing={3}>
             <Grid item xs={6}>
                <TextField label="Full Name" variant="outlined" onChange={(e)=>setName(e.target.value)} fullWidth/>
             </Grid>

             <Grid item xs={2}>
                <TextField  label="Class" variant="outlined" onChange={(e)=>setCls(e.target.value)} fullWidth/>
             </Grid>

             <Grid item xs={2}>
                <TextField label="Division" variant="outlined" onChange={(e)=>setDiv(e.target.value)} fullWidth/>
             </Grid>

             <Grid item xs={2}>
                <Button variant="contained" onClick={handleAdd} fullWidth>Add</Button>
             </Grid>
          </Grid>
        </div>
    )
}