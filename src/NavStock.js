import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import '././css/EachStock.css';

class NavStock extends Component {
    render(){
        return(
        <div>
            <Nav id = "options" as="ul">
                <Nav.Item as="li">
                    <Nav.Link>Quote</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link>Future Growth</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link >Valuation</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link>Financial Health</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link >Company information</Nav.Link>
                </Nav.Item>
        </Nav>
            </div>
        );
    }
}
export default NavStock;