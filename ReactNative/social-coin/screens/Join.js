import React, { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const onSubmitEditing = () => {
    passwordInput.current.focus();
  }
  return (
    <Container>
      <TextInput
      placeholder="Email"
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address" 
      returnKeyType="next"
      value={email} 
      onChangeText={(text) => setEmail(text)} 
      onSubmitEditing={onSubmitEditing}
      />
      <TextInput
      ref = {passwordInput}
      placeholder="Password"
      secureTextEntry
      returnKeyType="done"
      value={password} 
      onChangeText={(text) => setPassword(text)} />
    </Container>
  )
}
;

export default Join;