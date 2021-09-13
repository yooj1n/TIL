import { gql, useMutation } from "@apollo/client";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { logUserIn } from "../apollo";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import FormError from "../components/FormError";
import PageTitle from "../components/PageTitle";
import routes from "../routes";
import Notification from "../components/Notification";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username : $username, password : $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const location = useLocation();
  // input을 쉽게 핸들링 할 수 있는 Hook(register랑 handleSubmit은 지원해주는 기능임)
  // //7.0.0 이상 버전에선 formState안에 errors가 적용되어있다.
  const {register, handleSubmit, formState, getValues, setError, clearErrors} = useForm({
    mode: "onChange", //변화가 일어날때마다 감지.
    defaultValues: { //sign up때 작성했던 username과 password를 가져와서 input창에 나타내줌.
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    }
  });
  const onCompleted = (data) => {
    const {
      login: {ok, error, token},
    } = data;
    if (!ok) {
      return (
      setError("result", {
        message:error,
        })
      );
    }
    if (token) {
      logUserIn(token);
    }
  };
  //mutation을 사용할 수 있는 Hook
  //useMutation의 첫 return value는 mutation을 활성화시키는 첫 function이다
  //loading은 mutation이 잘 전송됐는지 확인
  const [login, {loading}] = useMutation(LOGIN_MUTATION, {
    onCompleted, //function이지만 동시에 arg로써 데이터를 제공해줌
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    //useForm 안에 있는 getValues 함수가 form에 작성한 값들을 불러와준다.
    const {username, password} = getValues();
    login({
      variables: {username, password}
    })
  }
  const clearLoginError = () => {
    //arg없이 호출하면 모든 에러들을 없애줄 것이다.
    clearErrors("result")
  }
  return (
      <AuthLayout>
        <PageTitle title="Login" />
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form onSubmit={handleSubmit(onSubmitValid)}>
          <Notification message={location?.state?.message} />
            <Input 
            {...register(
              "username",{ //value name
                required: "Username is required", 
                minLength: {
                  value:4,
                  message: "Username should be longer than 5 chars"
                },
              })}
            onFocus={clearLoginError}
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
            onFocus={clearLoginError}
            hasError={Boolean(formState.errors?.password?.message)} 
            />
            <FormError message={formState.errors?.password?.message} />
            <Button 
            type="submit" 
            value={loading ? "Loading..." : "Log In"} 
            disabled={!formState.isValid || loading} 
            />
            <FormError message={formState.errors?.result?.message} />
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