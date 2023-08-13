import React from "react"
import { Input } from "./Input"
import { Continents } from "./Continents"
import { Dish } from "./Dish"
import { Fruit } from "./Fruit"
import { StudentList } from "./StudentList"
import { UseMemoHook } from "./UseMemoHook"
import { UseCallbackHook } from "./UseCallbackHook"
import { UseRefHook } from "./UseRefHook"
import { Todo } from "./Todo"
import { Comp1 } from "./useContext/Comp1"
import { UseReducerHook } from "./UseReducerHook"

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
            <UseMemoHook/>
            <UseCallbackHook/>
            <UseRefHook/>
            <Todo/>
            <Comp1/>
            <UseReducerHook/>
        </div>
    )
}