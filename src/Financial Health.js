import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';

class Valuation extends Component {
    render(){
        return(
			<div>
				<NavStock/>
		        <div id = "group1">
		            <h5>Valuation</h5>
		            <h6>Ratios </h6>
		            <div id ="catergory1">
		                <div> Fair price </div>
		                <div> Dividend Yield % </div>
		                <div> Price/Sales </div> 
		                <div> Price/Earnings</div>
		                <div> Price/Forward Earnings</div> 
						<div> 210</div>
						<div> 210</div>
						<div> 210</div>
						<div> 210</div>
						<div> 210</div>
		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th></th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
						  <th> Current </th>
						  <th> Industry </th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Price/Earnings</td>
					      <td>123</td>
		                  <td>123</td>
		                  <td>123</td>
		                  <td>123</td>
		                  <td>123</td>
					    </tr>
					    <tr>
					      <td>Price/Sales</td>
					    </tr>
					    <tr>
					      <td>Return on assets %</td>
					    </tr>
					    <tr>
					      <td>Return on Equity %</td>
					    </tr>
					    <tr>
					      <td>Gross Margins</td>
					    </tr>
					    <tr>
					      <td> Operating Margin %</td>
					    </tr>

					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default Valuation;