import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

const View = styled.View`
flex:1;
padding: 0px 30px;
padding-top: 100px;
background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 100px;

`;
const Btn = styled.TouchableOpacity`
position: absolute;
bottom: 50px;
right: 50px;
width: 80px;
height: 80px;
background-color: ${colors.btnColor};
border-radius: 40px;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`;

const Home = ({navigation : {navigate}}) => (
  <View>
    <Title>My Story</Title>
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40}/>
    </Btn>
  </View>
);

export default Home;