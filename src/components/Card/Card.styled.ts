import { primaryColor } from './../../shared/Variables.styled';
import styled from "styled-components";

export interface CardProps {
    colortop?: string | string[];
    items?: 'start' | 'center' | 'end',
}

//wrapper  List
export const ListCardWrapper = styled.div`
padding: 2rem 0;
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
display: flex;
flex-direction: column;
border-radius: 10px;
border: 1px solid #f2f2f2;
align-items: ${(props) => props.items || 'initial'};
cursor: pointer;
transition: background-color 0.3s ease-in-out;
align-self: start;
padding: 1rem;
&:hover {
    background-color: ${(props) => props.theme.hoverCardBg};
}
   
`;


export const CardTitle = styled.h5`
font-weight: 700;
padding-bottom: 1rem;
border-bottom: 1px solid #f2f2f2;
color: ${(props) => props.theme.primaryText} ;
`;

export const CardText = styled.p`
color: ${(props) => props.theme.primaryText} ;
`;

export const CardButton = styled.button<{ buttonColor?: string }>`
border-radius: 10px;
border: 1px solid transparent;
padding: 0.5rem;
background-color: ${(props) => props.buttonColor || primaryColor.limeGreen};
color: #f2f2f2;
cursor: pointer;
&:disabled{
background-color: #c6c6c6
}
`;