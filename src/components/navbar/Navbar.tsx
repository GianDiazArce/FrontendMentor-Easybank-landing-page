import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colores } from "../../theme/colors";
import { CustomButton } from "../custom/CustomButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import useWindowDimensions from "../hooks/useDimentions";

const navBarItems: string[] = ["Home", "About", "Contact", "Blog", "Careers"];

const NavBar = styled.nav`
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 999;
    /* overflow: hidden; */
    background-color: ${colores.neutral.white};
    padding-top: 20px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
        & > button {
            display: none;
        }
    }
`;

const UlNav = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;

    color: hsl(233, 8%, 62%);
    font-size: 0.9rem;
    /* height: 100%; */
    /* font-size: 18px; */

    & > li {
        list-style: none;
        cursor: pointer;
        line-height: 50px;
        height: 50px;
    }
    & > li:hover {
        border-bottom: 2.5px solid ${colores.primary.limeGreen};
        color: black;
    }

    & > li > a {
        text-decoration: none;
        color: inherit;
    }

    @media only screen and (max-width: 768px) {
        /* display: none; */
        flex-direction: column;
        position: absolute;
        width: 50%;
        min-width: 289px;
        background-color: ${colores.neutral.white};
        top: 85px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        gap: 10px;
        color: ${colores.primary.darkBlue};
    }
`;

export const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const [viewDesktop, setViewDesktop] = useState(true);

    const { width } = useWindowDimensions();

    useEffect(() => {
        width >= 768 ? setViewDesktop(true) : setViewDesktop(false);
    }, [width]);

    return (
        <NavBar>
            <Container className="container">
                <figure onClick={(e) => console.log(viewDesktop)}>
                    <img src="./assets/images/logo.svg" alt="" />
                </figure>
                {viewDesktop ? (
                    <UlNav style={{ display: "flex" }}>
                        {navBarItems.map((navItem, index) => (
                            <li key={index}>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {navItem}
                                </a>
                            </li>
                        ))}
                    </UlNav>
                ) : (
                    <UlNav style={{ display: menuActive ? "flex" : "none" }}>
                        {navBarItems.map((navItem, index) => (
                            <li key={index}>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {navItem}
                                </a>
                            </li>
                        ))}
                    </UlNav>
                )}

                <CustomButton
                    title="Request Invite"
                    style={{ marginBottom: "1em" }}
                />
                {viewDesktop === false && (
                    <>
                        {!menuActive ? (
                            <GiHamburgerMenu
                                onClick={(e) => setMenuActive(true)}
                                style={{ cursor: "pointer" }}
                                color={colores.primary.darkBlue}
                                size={"25px"}
                            />
                        ) : (
                            <IoClose
                                onClick={(e) => setMenuActive(false)}
                                style={{ cursor: "pointer" }}
                                color={colores.primary.darkBlue}
                                size={"25px"}
                            />
                        )}
                    </>
                )}
            </Container>
        </NavBar>
    );
};
