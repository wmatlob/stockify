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
        //path = this.props.history;
        console.log(this.props);
        arrayData = this.props.history.location.rememberHere;
        //console.log(datas);
    }
    render(){
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