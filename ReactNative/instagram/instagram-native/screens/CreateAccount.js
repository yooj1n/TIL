import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/Auth/AuthButton";
import AuthLayout from "../components/Auth/AuthLayout";

const Container = styled.View`
flex: 1;
background-color: black;
`;

export default function CreateAccount(){
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }

  const onDone = () => {
    alert('onDone')
  }
  return (
    <AuthLayout>
      <KeyboardAvoidingView
      style={{
        width: "100%",
      }}
      behavior="padding"
      keyboardVerticalOffset = {Platform.OS === "ios" ? 50 : 0}
      >
    <TextInput
      placeholder="First Name"
      placeholderTextColor="gray"
      returnKeyType="next"
      style={{ backgroundColor: "white", width: "100%" }}
      onSubmitEditing={() => onNext(lastNameRef)}
    />
    <TextInput
      ref={lastNameRef}
      placeholder="Last Name"
      placeholderTextColor="gray"
      returnKeyType="next"
      style={{ backgroundColor: "white", width: "100%" }}
      onSubmitEditing={() => onNext(usernameRef)}
    />
    <TextInput
      ref={usernameRef}
      placeholder="Username"
      placeholderTextColor="gray"
      returnKeyType="next"
      style={{ backgroundColor: "white", width: "100%" }}
      onSubmitEditing={() => onNext(emailRef)}
    />
    <TextInput
      ref={emailRef}
      placeholder="Email"
      placeholderTextColor="gray"
      keyboardType="email-address"
      returnKeyType="next"
      style={{ backgroundColor: "white", width: "100%" }}
      onSubmitEditing={() => onNext(passwordRef)}
    />
    <TextInput
      ref={passwordRef}
      placeholder="Password"
      placeholderTextColor="gray"
      secureTextEntry
      returnKeyType="done"
      style={{ backgroundColor: "white", width: "100%" }}
      onSubmitEditing={onDone}
    />
    <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </KeyboardAvoidingView>
  </AuthLayout>
  );
}