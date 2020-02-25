import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';

class FutureGrowth extends Component {
    render(){
        return(
			<div>
				<NavStock/>
		        <div id = "group1">
		            <h5>Future Growth</h5>
		            <h6>Growth (3 years Annualized) </h6>
		            <div id ="catergory">
		                <div> Revenue % </div>
		                <div> Operating Income % </div>
		                <div> Net Income % </div> 
		                <div> EPS % </div>
		                <div> 210</div>
						<div> 210</div>
						<div> 210</div>
						<div> 210</div>
		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th>Fiscal year is Jan-Dec</th>
					      <th>2014</th>
					      <th>2015</th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Sales/Revenue</td>
					      <td>123</td>
					      <td>123</td>
					      <td>123</td>
					      <td>123</td>
					      <td>123</td>
					    </tr>
					    <tr>
					      <td>Sale Growth%</td>
					    </tr>
					    <tr>
					      <td>Net Income</td>
					    </tr>
					    <tr>
					      <td>Net Income Growth %</td>
					    </tr>
					    <tr>
					      <td>EPS</td>
					    </tr>
					    <tr>
					      <td>EPS Growth %</td>
					    </tr>

					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default FutureGrowth;