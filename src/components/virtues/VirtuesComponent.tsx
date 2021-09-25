import React from "react";
import styled from "styled-components";
import { colores } from "../../theme/colors";
import { virtuesText, reasonListText } from "../../db/texts";

const Main = styled.main`
    background-color: ${colores.neutral.lightGrayishBlue};
    padding: 50px 0;
    padding-top: 80px;
`;

const Container = styled.div`
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const Reason = styled.div`
    max-width: 590px;

    @media only screen and (max-width: 768px) {
        margin: 0 auto;
    }
`;

const ReasonTitle = styled.h2`
    color: ${colores.primary.darkBlue};
    font-weight: 400;
    font-size: 2rem;
    margin: 20px 0;
    @media only screen and (max-width: 768px) {
        width: 70%;
        margin: 20px auto;
    }
`;

const ReasonParagraph = styled.p`
    color: ${colores.neutral.grayishBlue};
    line-height: 1.5rem;
`;

const ReasonList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5em;
`;

const ReasonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    height: 350px;
    @media only screen and (max-width: 768px) {
        align-items: center;
    }
`;

const ReasonCardImg = styled.img`
    width: 80px;
`;

const ReasonCardTitle = styled.h3`
    font-weight: 400;
`;

const ReasonCardParagraph = styled.p`
    color: ${colores.neutral.grayishBlue};
`;

export const VirtuesComponent = () => {
    return (
        <Main>
            <Container className="container">
                <Reason>
                    <ReasonTitle>{virtuesText.reasonTitle}</ReasonTitle>
                    <ReasonParagraph>
                        {virtuesText.reasonParagraph}
                    </ReasonParagraph>
                </Reason>
                <ReasonList>
                    {reasonListText.map((reasonText, index) => (
                        <ReasonCard key={index}>
                            <ReasonCardImg
                                src={`/assets/images/${reasonText.img}`}
                            />
                            <ReasonCardTitle>
                                {reasonText.title}
                            </ReasonCardTitle>
                            <ReasonCardParagraph>
                                {reasonText.paragraph}
                            </ReasonCardParagraph>
                        </ReasonCard>
                    ))}
                </ReasonList>
            </Container>
        </Main>
    );
};
