import {
    TIME_SERIES_DAILY_KEY,
    TIME_SERIES_DAILY_OPEN_KEY,
    TIME_SERIES_DAILY_HIGH_KEY,
    TIME_SERIES_DAILY_LOW_KEY,
    TIME_SERIES_DAILY_CLOSE_KEY,
    TIME_SERIES_DAILY_VOLUME_KEY
} from "../data/constant";

const alphaVantageKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
// const microsoftData = require("../data/msft-data.json");

const createParsedDataObject = (rawRecord, date, openKey, highKey, lowKey, closeKey, volumeKey) => {
    return [Date.parse(date),
        round(rawRecord[openKey], 2),
        round(rawRecord[highKey], 2),
        round(rawRecord[lowKey], 2),
        round(rawRecord[closeKey], 2),
        round(rawRecord[volumeKey], 2),
        ];
};

const parseRawData = (
    rawData,
    numberOfRecords,
    dataKey,
    openKey,
    highKey,
    lowKey,
    closeKey,
    volumeKey,
) => {
    const seriesData = rawData[dataKey];
    const parsedData = [];
    let recordCount = 0;
    for (const date in seriesData) {
        if (recordCount >= numberOfRecords + 1) {
            break;
        }
        parsedData.push(
            createParsedDataObject((seriesData[date]), date, openKey, highKey, lowKey, closeKey, volumeKey)
        );
        recordCount++;
    }

    return parsedData.slice(0, numberOfRecords);
};

// const orderByDate = (dayData, reverseChronological = false) => {
//     return dayData.sort((a, b) => {
//         return reverseChronological
//             ? new Date(b.date) - new Date(a.date)
//             : new Date(a.date) - new Date(b.date);
//     });
// };

const parseTimeSeriesData = (rawData, numberOfRecords) => {
    return parseRawData(
        rawData,
        numberOfRecords,
        TIME_SERIES_DAILY_KEY,
        TIME_SERIES_DAILY_OPEN_KEY,
        TIME_SERIES_DAILY_HIGH_KEY,
        TIME_SERIES_DAILY_LOW_KEY,
        TIME_SERIES_DAILY_CLOSE_KEY,
        TIME_SERIES_DAILY_VOLUME_KEY
    );
};

// export const getMicrosoftData = () => {
//     return parseTimeSeriesData(microsoftData, 6);
// };


export const getMicrosoftDataFromApi = async () => {
    const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${alphaVantageKey}`
    );
    const data = await response.json();
    return parseTimeSeriesData(data, 50);
};

export const round = (number, decimalPlaces) => {
    return (
      Math.round(number * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces)
    );
  };
  