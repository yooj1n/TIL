import React from "react";
import styled from "styled-components/native";
import { DARK_COLOR } from "../colors";

const Container = styled.View`
background-color: ${DARK_COLOR};
flex: 1;
color: white;
`;

const Wrapper = styled.View`
margin-top: 30px;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Text = styled.Text`
font-size: 16px;
text-align: center;
color: white;
`;

const Btn = styled.TouchableOpacity``;

const BtnText = styled.Text`
font-size: 16px;
color: white;
font-weight: 600;
`;


const Login = ({navigation : {navigate}}) => (
  <Container>
    <Wrapper>
      <Text>Don't have an account? </Text>
      <Btn onPress={() => navigate("Join")}>
        <BtnText>Join us</BtnText>
      </Btn>
    </Wrapper>
  </Container>
);

export default Login;