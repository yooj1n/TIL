import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import auth from '@react-native-firebase/auth';
import { DARK_COLOR } from "../colors";
import { ActivityIndicator, Alert } from "react-native";
import { Btn, BtnText, TextInput } from "../components/shared";

const Container = styled.View`
background-color: ${DARK_COLOR};
flex: 1;
align-items: center;
padding: 50px 20px;
`;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus();
  }
  const onSubmitPasswordEditing = async() => {
    if (email === "" || password === "") {
      return Alert.alert("Fill in the form.")
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password)
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password" : {
          Alert.alert("Write a stronger password.")
        }
      }
    }
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
      onSubmitEditing={onSubmitEmailEditing}
      placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <TextInput
      ref = {passwordInput}
      placeholder="Password"
      secureTextEntry
      returnKeyType="done"
      value={password} 
      onChangeText={(text) => setPassword(text)} 
      onSubmitEditing ={onSubmitPasswordEditing}
      placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <Btn onPress={onSubmitPasswordEditing}>
        {loading ? (
          <ActivityIndicator color="white"/>
        ) : (
          <BtnText>Create Account</BtnText>
        )}
      </Btn>
    </Container>
  )
}
;

export default Join;