import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;


const Login = ({navigation : {navigate}}) => (
  <Container>
    <Text>Don't have an account? 
      <Btn onPress={() => navigate("Join")}>
        <BtnText>Join us</BtnText>
      </Btn>
    </Text>
  </Container>
);

export default Login;