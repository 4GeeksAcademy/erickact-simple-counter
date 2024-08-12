//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let number = 0;

const interval = setInterval(function(){
    number ++

    let stringNumber = number.toString()

    let stringPad = stringNumber.padStart(6,0)

    const arrayNumbers = stringPad.split("")
    
    ReactDOM.createRoot(document.getElementById('app')).render(<Home arrayNumbers = {arrayNumbers} interval={interval}/>);
}, 1000)




//render your react application


