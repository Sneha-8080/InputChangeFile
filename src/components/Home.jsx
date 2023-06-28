import React from "react"
import { Input } from "./Input"
import { Continents } from "./Continents"
import { Dish } from "./Dish"
import { Fruit } from "./Fruit"
import { StudentList } from "./StudentList"
import "./common.css"

export const Home = () =>{
    return(
        <div className="main">
            <h1>Hello, This is home page!</h1>
            <Input/>
            <Continents/>
            <Dish/>
            <Fruit/>
            <StudentList/>
        </div>
    )
}