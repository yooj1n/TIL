import styled from "styled-components";

const SNotification = styled.div`
background-color: #2ecc71;
padding: 10px;
color: white;
font-weight: 600;
margin-bottom: 20px;
`;

function Notification({ message }) {
  //메세지 없으면 공백 없애기
  return message === "" || !message ? null : <SNotification>{message}</SNotification>;
}

export default Notification;