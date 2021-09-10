import styled from "styled-components";


const SButton = styled.input`
border: none;
border-radius: 3px;
margin-top: 12px;
width: 100%;
background-color: ${(props) => props.theme.accent} ;
color: white;
text-align: center;
padding: 8px 0px;
font-weight: 600;
`;

//type이나 value같은 button들의 props 기능을 제대로 할 수 있도록 모든 props를 받도록 설정
function Button(props) {
  return <SButton {...props} />
}

export default Button;