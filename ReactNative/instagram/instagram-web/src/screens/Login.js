import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import AuthLayout from "../components/auth/Container";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import BaseBox from "../components/shared";
import routes from "../routes";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  return (
      <AuthLayout>
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" value="Log in" />
          </form>
          <Separator />
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </FormBox>
      <BottomBox 
      cta="Don't have an account?"
      link={routes.signUp}
      linkText="Sign up"
      />
      </AuthLayout>
  );
}
export default Login;