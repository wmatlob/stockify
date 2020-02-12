import React from 'react';


export const AppContext = React.createContext();
const alphaVantageKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    // componentDidMount = () => {
    //     this.fetchStocks();
    // }

    // fetchStocks = async () => {
    //     let response = await fetch(
    //         `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${alphaVantageKey}`
    //     );
    //     const data = await response.json();
    //     console.log(data)
    // };

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('crytoDash'));
        if (!cryptoDashData) {
            return ({ page: 'settings', firstVisit: true })
        }
        return {};
    }

    setPage = page => this.setState({ page })

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}