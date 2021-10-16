import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TopBarContainer = styled.header`
    width: 100%;
    height: 68px;
    background-color: #1976d2;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: white;
        margin: 0;
    }
`;

export const FancyButton = styled(Link)`
    background-color: white;
    color: #1976d2;
    padding: 8px 16px;
    border-radius: 2px;
    display: flex;
    align-items: center;

    border: 2.5px solid ${ props => props.borderColor };

    :hover{
        background-color: #f0e6ff;
    }
`;

export const FaShoppingCartIcon = styled(FaShoppingCart)`
    color: var(--primary);
    padding: 4px;
    font-size: 26px;
`;