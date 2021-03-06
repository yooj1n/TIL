import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";


const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Footer = styled.footer`
margin-top: 20px;
`;

const DarkModeBtn = styled.span`
cursor: pointer;
`;

const Modemessage = styled.span`
margin-left: 5px;
`;

function AuthLayout({children}) {
  const darkeMode = useReactiveVar(darkModeVar);
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
      <Footer>
        <DarkModeBtn onClick={darkeMode ? disableDarkMode : enableDarkMode}>
          <FontAwesomeIcon icon={darkeMode ? faSun : faMoon} />
          <Modemessage>{darkeMode ? "Light Mode" : "Dark Mode"}</Modemessage>
        </DarkModeBtn>
      </Footer>
    </Container>
  );
}

export default AuthLayout;