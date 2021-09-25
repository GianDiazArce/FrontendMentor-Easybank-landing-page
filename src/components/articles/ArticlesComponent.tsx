import React from "react";
import styled from "styled-components";
import { articlesText } from "../../db/texts";
import { colores } from "../../theme/colors";

const Articles = styled.div`
    background-color: ${colores.neutral.veryLightGray};
    padding: 80px 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ArticleTitle = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 16px;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colores.neutral.white};
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;

    &:hover > div > h2 {
        /* color: ${colores.primary.limeGreen} */
        color: #7db2a0;
    }
`;

const CardFigure = styled.figure`
    width: 100%;
    height: 200px;
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2em 1.5em;
    padding-right: 2em;
`;
const CardAuthor = styled.p`
    color: ${colores.neutral.grayishBlue};
`;
const Cardtitle = styled.h2`
    font-weight: 400;
`;
const CardParagraph = styled.p`
    color: ${colores.neutral.grayishBlue};
`;

export const ArticlesComponent = () => {
    return (
        <Articles>
            <Container className="container">
                <ArticleTitle>{articlesText.title}</ArticleTitle>
                <CardsContainer>
                    {articlesText.cardText.map((cardText, index) => (
                        <Card key={index}>
                            <CardFigure>
                                <CardImg
                                    src={`assets/images/${cardText.img}`}
                                />
                            </CardFigure>
                            <CardBody>
                                <CardAuthor>{cardText.author}</CardAuthor>
                                <Cardtitle>{cardText.title}</Cardtitle>
                                <CardParagraph>
                                    {cardText.paragraph}
                                </CardParagraph>
                            </CardBody>
                        </Card>
                    ))}
                </CardsContainer>
            </Container>
        </Articles>
    );
};
