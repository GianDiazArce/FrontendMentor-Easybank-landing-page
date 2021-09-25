import React from "react";
import { Navbar } from "../components/navbar/Navbar";

import styled from "styled-components";
import { HeaderComponent } from "../components/header/Header";
import { VirtuesComponent } from "../components/virtues/VirtuesComponent";
import { ArticlesComponent } from "../components/articles/ArticlesComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";

const Container = styled.div`
    /* max-width: 1200px; */
    /* border: 1px solid black; */
    /* margin: 0 auto; */
    overflow: hidden;
`;

export const HomePage = () => {
    return (
        <Container>
            <Navbar />
            <HeaderComponent />
            <VirtuesComponent />
            <ArticlesComponent />
            <FooterComponent />
            {/* <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Your Name Here</a>.
            </div> */}
        </Container>
    );
};
