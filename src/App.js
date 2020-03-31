import React, {Component} from 'react';
import '././css/App.css';
import Header from './Header';
import Stock from './Stock';
import Quote from './Quote';
import Footer from './Footer';
import FutureGrowth from './FutureGrowth';
import Valuation from './Valuation';
import FinancialHealth from './FinancialHealth';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  
  render(){
    return (
      <Router>
        <div data-spy="scroll" >
          <Header/>

        
        <Switch>
          <Route path ="/" exact component = {Stock}/>
          <Route path ="/Quote" component = {Quote}/> 
          <Route path ="/FutureGrowth" component = {FutureGrowth}/> 
          <Route path ="/Valuation" component = {Valuation}/> 
          <Route path ="/FinancialHealth" component = {FinancialHealth}/>
        </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
  
}

export default App;
