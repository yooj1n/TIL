import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/Auth/AuthButton";
import AuthLayout from "../components/Auth/AuthLayout";
import { TextInput } from "../components/Auth/AuthShared";


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
    <TextInput
      placeholder="First Name"
      returnKeyType="next"
      onSubmitEditing={() => onNext(lastNameRef)}
      placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
    />
    <TextInput
      ref={lastNameRef}
      placeholder="Last Name"
      returnKeyType="next"
      onSubmitEditing={() => onNext(usernameRef)}
      placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
    />
    <TextInput
      ref={usernameRef}
      placeholder="Username"
      returnKeyType="next"
      onSubmitEditing={() => onNext(emailRef)}
      placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
    />
    <TextInput
      ref={emailRef}
      placeholder="Email"
      keyboardType="email-address"
      returnKeyType="next"
      onSubmitEditing={() => onNext(passwordRef)}
      placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
    />
    <TextInput
      ref={passwordRef}
      placeholder="Password"
      secureTextEntry
      returnKeyType="done"
      onSubmitEditing={onDone}
      lastOne = {true}
      placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
    />
    <AuthButton text="Create Account" disabled={true} onPress={() => null} />
  </AuthLayout>
  );
}