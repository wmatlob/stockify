import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from "../Shared/Tile";
import {fontSize3, fontSizeBig} from "../Shared/Styles";
import { StockHeaderGridStyled } from '../Settings/StockHeaderGrid';

const JustifyRight = styled.div`
    justify-self: right;
`

const TickerPrice = styled.div`
    ${fontSizeBig}
`
const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        ${fontSize3}
    `
    }
`

function PriceTile({sym, stockPrice, stockChange}){
    return (
        <PriceTileStyled>
            <StockHeaderGridStyled>
                <div> {sym} </div>
                <JustifyRight>{stockChange}</JustifyRight>
            </StockHeaderGridStyled>
            <TickerPrice>
                {stockPrice}
            </TickerPrice>
        </PriceTileStyled>
    )
}



export default function ({ price, index }) {
    let sym = price['Ticker']
    let stockPrice = price['Price']
    let stockChange = price['Change']

    return(
        <PriceTile sym={sym} stockPrice={stockPrice} stockChange={stockChange}>
        </PriceTile >
    ) 
}