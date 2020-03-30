import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import {Col, Row, Container} from 'react-bootstrap';
import '././css/EachStock.css';
import StockCharts from './StockCharts';
import KeyMetric from './KeyMetric';
import NavStock from './NavStock';

let arrayData = [];
class EachStock extends Component {
    constructor (props) {
        super(props);
        arrayData = this.props.history.location.metaData
                 == undefined ?this.props.location.state: this.props.history.location.metaData;
        
    }
    render(){
        console.log( "this is data in Stock" + JSON.stringify(arrayData));
        return(
            <div>
                <NavStock { ...arrayData}></NavStock>
                <Container id = "layout">
                    <Row id ="fix">
                        <Col xs={6}><StockCharts/></Col>
                        <Col xs={6}><KeyMetric {...arrayData}></KeyMetric></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default EachStock;