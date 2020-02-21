import React from 'react'
import {AppContext} from "../App/AppProvider";

export default function(props) {
    return <AppContext.Consumer>
        {({stockList})=>{
            if(!stockList) {
                return <div> Loading Stocks...</div>
            } 
            return <div> {props.children}</div>
        }}
    </AppContext.Consumer>
}