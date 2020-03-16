import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import '././css/EachStock.css';
import {Link} from 'react-router-dom';

let variale = [];
class NavStock extends Component {
    constructor(props){
        super(props)
        variale = this.props;
    }
    render(){
        return(
        <div>
             {/* <Nav id = "options" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href = '/Quote'>Quote </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href = '/FutureGrowth'>Future Growth</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href = '/Valuation'>Valuation</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href = '/FinancialHealth'>Financial Health</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link >Company information</Nav.Link>
                </Nav.Item>
            </Nav> */}

            <nav className = "nav-link1">
                <ul className="nav-link2">
                    <Link to = "/Quote">
                        <li> Quote </li>
                    </Link>
                    <Link to = "/FutureGrowth">
                        <li> Future Growth </li>
                    </Link>
                    <Link to = "/Valuation">
                        <li> Valuation </li>
                    </Link>
                    <Link to = "/FinancialHealth">
                        <li> Financial Health </li>
                    </Link>
                    <Link>
                        <li> Company information </li>
                    </Link>
                </ul>
            </nav>


        </div>
        );
    }
}
export default NavStock;