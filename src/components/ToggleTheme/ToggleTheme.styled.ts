import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import { styled } from "styled-components";
import { primaryColor } from '../../shared/Variables.styled';



export const ToggleButton = styled(BootstrapButton) <ButtonProps>`
    position: fixed;
    right: 2rem;
    top: 0.5rem;
    width: 45px;
    height: 40px; 
    border-radius: 2rem;
    z-index: 1000;
     background-color: ${() => primaryColor.brightPurple};
     border-color: ${() => primaryColor.brightPurple};
     &:hover,
     &:active {
    background-color: ${() => primaryColor.brightPurple} !important;
     border-color: ${() => primaryColor.brightPurple} !important;
}
   
`;