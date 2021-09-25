import React from "react";
import styled from "styled-components";
import { colores } from "../../theme/colors";
import { headerText } from "../../db/texts";
import { CustomButton } from "../custom/CustomButton";

const Header = styled.header`
    background-color: ${colores.neutral.veryLightGray};
    @media only screen and (max-width: 768px) {
        height: 93vh;
    }
`;

const Container = styled.div`
    /* background-color: inherit; */
    display: flex;
    justify-content: space-between;
    width: 95%;
    /* height: 1200px; */
    padding: 20px 0;
    height: auto;
    min-height: 578px;
    margin-right: 0;
    padding-bottom: 0;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        justify-content: flex-start;
    }
`;

const HeaderTexts = styled.div`
    width: 30%;
    place-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    @media only screen and (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 20px 20px;
        height: 50%;
    }
`;

const HeaderTitle = styled.h1`
    font-weight: 400;
    color: ${colores.primary.darkBlue};
    font-size: 2.3rem;
`;

const Paragraph = styled.p`
    color: ${colores.neutral.grayishBlue};
    line-height: 1.5em;
    letter-spacing: 0.1px;
    text-align: inherit;
`;

const HeaderImages = styled.div`
    position: relative;
    background-image: url("/assets/images/bg-intro-desktop.svg");
    background-size: cover;
    background-position-x: 50px;
    background-position-y: 60%;
    background-repeat: no-repeat;
    width: 60%;
    @media only screen and (max-width: 768px) {
        width: 100%;
        order: -1;
        background-image: url("/assets/images/bg-intro-mobile.svg");
        background-position: center;
        height: 50%;
    }
`;

// const BgImage = styled.img`
//     position: absolute;
//     top: -80px;
//     right: -80px;
//     max-height: 686px;
// `;

const PhoneImage = styled.img`
    position: absolute;
    top: -80px;
    right: -80px;
    max-width: 630px;
    z-index: 9;
    @media only screen and (max-width: 768px) {
        position: relative;
        max-width: 460px;
        display: block;
        margin: auto;
        object-fit: cover;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`;

export const HeaderComponent = () => {
    return (
        <Header>
            <Container className="container">
                <HeaderTexts>
                    <HeaderTitle>{headerText.title}</HeaderTitle>
                    <Paragraph>{headerText.paragraph}</Paragraph>
                    <CustomButton title={headerText.buttonText} />
                </HeaderTexts>

                <HeaderImages>
                    <PhoneImage
                        className="img-fluid"
                        src="/assets/images/image-mockups.png"
                    />
                </HeaderImages>
            </Container>
        </Header>
    );
};
