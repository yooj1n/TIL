import styled from "styled-components";

const SFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 7px 0px 5px 0px;
`;

function FormError({ message }) {
  //메세지가 공백이거나 메세지가 없다면 input들 사이에 공백을 없애기
  return message === "" || !message ? null : <SFormError>{message}</SFormError>;
}

export default FormError;