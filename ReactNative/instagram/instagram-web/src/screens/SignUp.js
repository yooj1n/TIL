import { gql, useMutation } from "@apollo/client";
import {
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/shared";
import routes from "../routes";
import FormError from "../components/FormError";

const HeaderContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const Subtitle = styled(FatLink)`
font-size: 16px;
text-align: center;
margin-top: 15px;
`;


const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SingUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const {username, password} = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return (
        setError("result", {
          message:error,
          })
        );
    }
    history.push(routes.home, {message : "Account Created. You can Log In!", username, password});
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, formState, getValues, setError, clearErrors } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data, //Input에 작성된 모든 data
      },
    });
  };
  const clearLoginError = () => {
    //arg없이 호출하면 모든 에러들을 없애줄 것이다.
    clearErrors("result")
  }
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register(
              "firstName",{
                required: "First name is required"
              })}
            onFocus={clearLoginError}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <FormError message={formState.errors?.firstName?.message} />
          <Input
            {...register(
              "lastName",
              )}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <Input
            {...register(
              "email",{
                required: "Email is required"
              })}
            onFocus={clearLoginError}
            type="text"
            placeholder="Email"
          />
          <FormError message={formState.errors?.email?.message} />
          <Input
            {...register(
            "username",{
              required: "Username is required"
            })}
            onFocus={clearLoginError}
            type="text"
            placeholder="Username"
          />
          <FormError message={formState.errors?.username?.message} />
          <Input
            {...register(
              "password",{
                required: "password is required"
              })}
            onFocus={clearLoginError}
            type="password"
            placeholder="Password"
          />
          <FormError message={formState.errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}
export default SingUp;