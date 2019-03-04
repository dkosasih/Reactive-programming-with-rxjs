import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 700px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-evenly;
`;

export const ColumnSmall = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-grow: 0.33;
    justify-content: space-evenly;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: 30px;
`;