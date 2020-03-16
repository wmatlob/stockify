import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Table from 'react-bootstrap/table';

class KeyMetric extends Component {
    constructor (props) {
        super(props);
        //path = this.props.history;
        console.log(this.props);
        //const datas = this.props.history.location.rememberHere;
        //console.log(datas);

    }
    render (){
        let variable = this.props;
        return(
        <div>
            <h5  id ="title">Key Metric</h5>
            <Table striped bordered hover size="sm" >
              <tbody>
                <tr>
                    <td> Moat </td>
                    <td> No.of Fund owning </td>
                    <td> Sharpe Ratio </td> 
                    <td> Market Cap </td>
                    <td> Sector </td> 
                </tr>
                <tr>
                    <td>{variable.Change}</td>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                </tr>
                <tr>
                    <td> Price/Sales </td>
                    <td> Price/Earnings </td>
                    <td> Forward P/E </td> 
                    <td> Price/Bookp </td>
                    <td> PEG Ratio </td>
                </tr>
                <tr>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                </tr>
                <tr>
                    <td> Rev 3-Yr Growth </td>
                    <td> ROE % </td>
                    <td> Operating Margin </td> 
                    <td> Div Yield </td>
                    <td> Current Ratio </td> 
                </tr>
                <tr>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                    <td> 123</td>
                </tr>
              </tbody>
            </Table>
        </div>
      );
    }
}
export default KeyMetric;