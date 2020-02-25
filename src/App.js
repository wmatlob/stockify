import React, {Component} from 'react';
import '././css/App.css';
import Header from './Header';
import Stock from './Stock';
import EachStock from './EachStock';
import Footer from './Footer';
import FutureGrowth from './FutureGrowth';
import Valuation from './Valuation';
import FinancialHealth from './FinancialHealth';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class App extends Component {
	
  render(){
    return (
      <div data-spy="scroll" >
        <Header/>
        <Breadcrumb>
          	<Breadcrumb.Item> Stock </Breadcrumb.Item>
          	<Breadcrumb.Item> United States </Breadcrumb.Item>
      	</Breadcrumb>
        <Stock/> 
        <EachStock/>
        <FutureGrowth/>
        <Valuation/>
        <FinancialHealth/>

        <Footer/>
      </div>
    );
  }
  
}

export default App;
