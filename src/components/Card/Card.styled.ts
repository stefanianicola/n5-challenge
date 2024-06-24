import styled from "styled-components";

interface CardProps {
    colortop?: string | string[];
    items?: 'start' | 'center' | 'end',
}

//wrapper  List
export const ListCardWrapper = styled.div`
padding: 2rem 0;
margin: 0 2rem;
display: grid;
gap: 3.5rem;
grid-template-columns: repeat(1, 1fr); /* default, 1 column */

@media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns medium size */
    }

    @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 2 columns medium size */
    }
    
    
@media (min-width: 1440px) {
grid-template-columns: repeat(4, 1fr); /* 4 columns large size */
}
`;


// card
export const CardBody = styled.div<CardProps>`
width: 100%;
z-index: 20;
position: relative;
background-color: ${(props) => props.theme.cardBg};
display: flex;
flex-direction: column;
border-radius: 4px;
border: 1px solid red;
align-items: ${(props) => props.items || 'initial'};
cursor: pointer;
transition: background-color 0.3s ease-in-out;
align-self: start;
padding: 3rem;
&:hover {
    background-color: ${(props) => props.theme.hoverCardBg};
}
   
`;


export const CardTitle = styled.h5`
font-weight: 700;
`;

export const CardText = styled.p`
color: green;
`;