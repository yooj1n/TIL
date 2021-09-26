import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import styled from "styled-components/native"
import { colors } from "../colors";
import AuthButton from "../components/Auth/AuthButton";
import AuthLayout from "../components/Auth/AuthLayout";

const LoginLink = styled.Text`
color: ${colors.blue};
font-weight: 600;
margin-top: 20px;
text-align: center;
`;

export default function Welcome({navigation}){
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <StatusBar barStyle="light-content"/>
      <AuthButton
      text="Create New Account"
      disabled={false}
      onPress={goToCreateAccount}
      />
      <TouchableOpacity onPress={goToLogIn}>
      <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}