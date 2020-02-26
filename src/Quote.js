import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import {Col, Row, Container} from 'react-bootstrap';
import '././css/EachStock.css';
import StockCharts from './StockCharts';
import KeyMetric from './KeyMetric';
import NavStock from './NavStock';

class EachStock extends Component {
    render(){
        
        return(
            <div>
            <NavStock/>
            <Container id = "layout">
                <Row id ="fix">
                    <Col xs={6}><StockCharts/></Col>
                    <Col xs={6}><KeyMetric/></Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default EachStock;