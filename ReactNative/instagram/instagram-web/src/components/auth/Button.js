import styled from "styled-components";


const Button = styled.input`
border: none;
border-radius: 3px;
margin-top: 12px;
width: 100%;
background-color: ${(props) => props.theme.accent} ;
color: white;
text-align: center;
padding: 8px 0px;
font-weight: 600;
opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

export default Button;