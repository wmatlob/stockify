import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({stock, style}) {
    return <img 
        alt={stock.Ticker}
        style={style || {height: '50px', width: 'auto', marginTop: '10px'}}
        src={stock.ImageUrl}
    />;
}