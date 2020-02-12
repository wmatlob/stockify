import React, { Component } from 'react';
import './App.css';
import StockCharts from './StockCharts';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings'

class App extends Component {

  // componentDidMount = () => {
  //   this.fetchStocks();
  // }

  // fetchStocks = async () => {
  //   let response = await fetch(
  //     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${alphaVantageKey}`
  //   );
  //   const data = await response.json();
  // };


  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
        <StockCharts />
      </AppLayout>
    );
  }
}

export default App;