import React, { Component } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getMicrosoftDataFromApi } from '../api/index';
import axios from 'axios';

class StockCharts extends Component {
    state = {
        data: null
    }


    async componentDidMount() {
        var data = await getMicrosoftDataFromApi();
        console.log(data);
        this.setState({
            data: data
        })
    }


    render() {
        if (!this.state.data) {
            return <div />
        }
        const data = this.state.data
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            groupingUnits = [
                [
                    "week", // unit name
                    [1] // allowed multiples
                ],
                ["month", [1, 2, 3, 4, 6]]
            ],
            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }
        const options = {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: "MSFT Historical"
            },

            yAxis: [
                {
                    labels: {
                        align: "right",
                        x: -3
                    },
                    title: {
                        text: "OHLC"
                    },
                    height: "60%",
                    lineWidth: 2,
                    resize: {
                        enabled: true
                    }
                },
                {
                    labels: {
                        align: "right",
                        x: -3
                    },
                    title: {
                        text: "Volume"
                    },
                    top: "65%",
                    height: "35%",
                    offset: 0,
                    lineWidth: 2
                }
            ],

            tooltip: {
                split: true
            },

            series: [
                {
                    type: "candlestick",
                    name: "MSFT",
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    }
                },
                {
                    type: "line",
                    name: "Volume",
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }
            ]
        };
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"stockChart"}
                    options={options}
                />
            </div>);
    }
};

// const StockCharts = Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-ohlcv.json', function (data) {

//     // split the data set into ohlc and volume
//     var ohlc = [],
//         volume = [],
//         dataLength = data.length,
//         i = 0;

//     for (i; i < dataLength; i += 1) {
//         ohlc.push([
//             data[i][0], // the date
//             data[i][1], // open
//             data[i][2], // high
//             data[i][3], // low
//             data[i][4] // close
//         ]);

//         volume.push([
//             data[i][0], // the date
//             data[i][5] // the volume
//         ]);
//     }

//     Highcharts.stockChart('container', {
//         yAxis: [{
//             labels: {
//                 align: 'left'
//             },
//             height: '80%',
//             resize: {
//                 enabled: true
//             }
//         }, {
//             labels: {
//                 align: 'left'
//             },
//             top: '80%',
//             height: '20%',
//             offset: 0
//         }],
//         tooltip: {
//             shape: 'square',
//             headerShape: 'callout',
//             borderWidth: 0,
//             shadow: false,
//             positioner: function (width, height, point) {
//                 var chart = this.chart,
//                     position;

//                 if (point.isHeader) {
//                     position = {
//                         x: Math.max(
//                             // Left side limit
//                             chart.plotLeft,
//                             Math.min(
//                                 point.plotX + chart.plotLeft - width / 2,
//                                 // Right side limit
//                                 chart.chartWidth - width - chart.marginRight
//                             )
//                         ),
//                         y: point.plotY
//                     };
//                 } else {
//                     position = {
//                         x: point.series.chart.plotLeft,
//                         y: point.series.yAxis.top - chart.plotTop
//                     };
//                 }

//                 return position;
//             }
//         },
//         series: [{
//             type: 'ohlc',
//             id: 'aapl-ohlc',
//             name: 'AAPL Stock Price',
//             data: ohlc
//         }, {
//             type: 'column',
//             id: 'aapl-volume',
//             name: 'AAPL Volume',
//             data: volume,
//             yAxis: 1
//         }],
//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 800
//                 },
//                 chartOptions: {
//                     rangeSelector: {
//                         inputEnabled: false
//                     }
//                 }
//             }]
//         }
//     });
// });

export default StockCharts;



