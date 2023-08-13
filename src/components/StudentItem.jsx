import React from "react"
import { Card, CardContent, Grid } from "@mui/material"

export const StudentItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <h3>{item.name}</h3>
                    <h4>{item.cls} - {item.div}</h4>
                </CardContent>
            </Card>
        </Grid>
    )
}