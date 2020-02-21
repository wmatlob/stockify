import React from 'react';
import styled from "styled-components";
import {DeletableTile} from "../Shared/Tile";

export const StockHeaderGridStyled = styled.div`
  display: grid;
`;

export const StockSymbol = styled.div`
  justify-self: right;
  padding-top: 10px;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none; 
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default function ({name, ticker, topSection}) {
  return <StockHeaderGridStyled>
    <StyledDiv > {ticker} {topSection?<DeleteIcon> X </DeleteIcon>:null} </StyledDiv>
    {topSection ? null: (
      <StockSymbol> {name} </StockSymbol>
    )}
  </StockHeaderGridStyled>;
}
