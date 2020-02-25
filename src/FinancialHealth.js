import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';

class Valuation extends Component {
    render(){
        return(
			<div>
				<NavStock/>
		        <div id = "group1">
		            <h5>Financial Health</h5>
		            <h6>Ratios </h6>
		            <div id ="catergory">
		                <div> Quick Ratio </div>
		                <div> Current Ratio </div>
		                <div> Debt/Equity </div> 
		                <div> Cash/sh</div>
						<div> 210</div>
						<div> 210</div>
						<div> 210</div>
						<div> 210</div>
		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th>Fiscal year is Jan-Dec (USD millions)</th>
					      <th>2014</th>
					      <th>2015</th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Assets</td>
					      <td>123</td>
		                  <td>123</td>
		                  <td>123</td>
		                  <td>123</td>
		                  <td>123</td>
					    </tr>
					    <tr>
					      <td>Assets Growth %</td>
					    </tr>
					    <tr>
					      <td>Liabilties</td>
					    </tr>
					    <tr>
					      <td>Liabilities Growth%</td>
					    </tr>
					    <tr>
					      <td id = "bold-text">Total Equity</td>
					    </tr>
					    <tr>
					      <td> Shareholders' Equity Growth %</td>
					    </tr>

					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default Valuation;