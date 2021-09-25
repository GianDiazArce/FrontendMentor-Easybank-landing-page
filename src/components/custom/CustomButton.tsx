import React from "react";
import styled from "styled-components";
import { colores } from "../../theme/colors";

interface Props {
    title?: string;
    style?: React.CSSProperties;
}

const Button = styled.button`
    background-image: linear-gradient(
        90deg,
        rgba(49, 211, 92, 1) 5%,
        rgba(43, 183, 218, 1) 92%
    );
    border: none;
    cursor: pointer;
    padding: 12px 25px;
    border-radius: 30px;
    color: ${colores.neutral.white};
    font-weight: 600;
    letter-spacing: 0.5px;
    min-width: 140px;

    box-shadow: 0 0 10px -3px rgba(49, 211, 92, 0.4),
        0 0 10px -3px rgba(43, 183, 218, 0.4);

    transition: opacity 0.3s;

    /* filter: drop-shadow(0 0 10px rgba(49,211,92,.6)), drop-shadow(0 0 10px rgba(43,183,218,.6)); */

    &:hover {
        opacity: 0.5;
    }

    &:active {
        opacity: 0.9;
    }
`;

export const CustomButton = ({ title, style }: Props) => {
    return <Button style={style}>{title}</Button>;
};
