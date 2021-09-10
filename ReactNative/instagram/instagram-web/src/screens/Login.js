import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import AuthLayout from "../components/auth/Container";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import FormError from "../components/FormError";
import PageTitle from "../components/PageTitle";

import routes from "../routes";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  // input을 쉽게 핸들링 할 수 있는 Hook(register랑 handleSubmit은 지원해주는 기능임)
  // //7.0.0 이상 버전에선 formState안에 errors가 적용되어있다.
  const {register, handleSubmit, formState} = useForm({
    mode: "onChange" //변화가 일어날때마다 감지.
  }); //
  const onSubmitValid = (data) => {
    console.log(data);
  }
  return (
      <AuthLayout>
        <PageTitle title="Login" />
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input 
            {...register(
              "username",{ //value name
                required: "Username is required", 
                minLength: {
                  value:5,
                  message: "Username should be longer than 5 chars"
                },
              })} 
            name="username" 
            type="text" 
            placeholder="Username"
            hasError={Boolean(formState.errors?.username?.message)}
            />
            <FormError message={formState.errors?.username?.message} />
            <Input 
            {...register(
              "password",{
                required: "password is required"
              })} 
            type="password" 
            placeholder="Password"
            hasError={Boolean(formState.errors?.password?.message)} 
            />
            <FormError message={formState.errors?.password?.message} />
            <Button type="submit" value="Log in" disabled={!formState.isValid} />
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