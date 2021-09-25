import React from "react";
import styled from "styled-components";
import { colores } from "../../theme/colors";
import { CustomButton } from "../custom/CustomButton";
import { LogoWhite } from "./LogoWhite";
import { footerSocialIcons } from "../../db/texts";

const Footer = styled.footer`
    background-color: ${colores.primary.darkBlue};
    color: ${colores.neutral.white};
    padding: 30px 0;
    padding-bottom: 15px; ;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 55%;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const FooterActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 45px;
`;

const FooterLogo = styled.div``;

const FooterSocialIcons = styled.div``;

const FooterIcon = styled.img`
    cursor: pointer;
    margin: 5px 6px;
`;

const FooterNav = styled.div`
    & > ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 92%;
        padding-top: 5px;
        @media only screen and (max-width: 768px) {
            align-items: center;
        }
    }

    & > ul > li {
        list-style: none;
        color: ${colores.neutral.lightGrayishBlue};
        @media only screen and (max-width: 768px) {
            align-items: center;
            margin: 10px;
        }
    }

    & > ul > li:hover {
        color: ${colores.primary.limeGreen};
    }

    & > ul > li > a {
        color: inherit;
        text-decoration: none;
        font-weight: 300;
        font-size: 14px;
        opacity: 0.9;
    }
`;

const FooterCopy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    color: ${colores.neutral.grayishBlue};
    font-weight: 300;
    @media only screen and (max-width: 768px) {
        width: 100%;
        align-items: center;
        margin: 20px 0;
        gap: 30px;
    }
`;

const FooterCopyText = styled.p``;

export const FooterComponent = () => {
    return (
        <Footer>
            <Container className=" container ">
                <FooterContent>
                    <FooterActions>
                        <FooterLogo>
                            <LogoWhite />
                        </FooterLogo>
                        <FooterSocialIcons>
                            {footerSocialIcons.map((icon, index) => (
                                <FooterIcon
                                    key={index}
                                    src={`/assets/images/${icon.img}`}
                                    alt={icon.alt}
                                />
                            ))}
                        </FooterSocialIcons>
                    </FooterActions>
                    <FooterNav>
                        <ul>
                            <li>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </FooterNav>
                    <FooterNav>
                        <ul>
                            <li>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </FooterNav>
                </FooterContent>
                <FooterCopy>
                    <CustomButton title="Request Invite" />
                    <FooterCopyText>
                        &copy; Easybank. All Rights Reserved
                    </FooterCopyText>
                </FooterCopy>
            </Container>
        </Footer>
    );
};
