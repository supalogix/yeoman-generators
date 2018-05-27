import React from "react"
import {render} from "react-dom"

export const start = () => render(
    <h1>Hello World</h1>,
    document.getElementById("root"))