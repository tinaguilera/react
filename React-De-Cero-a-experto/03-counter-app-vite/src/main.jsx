import React from 'react'
import ReactDOM from "react-dom/client";
import {App} from "./FirstApp";
import { HelloWorldApp } from './HelloWorldApp';

import './styles.css'
import { CounterApp } from './CounterApp';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >
        {/* <HelloWorldApp title ="Camion " subtitle= {123}/>
        <App/> */}
        <CounterApp value ={2}/>
        
    </React.StrictMode>   
)