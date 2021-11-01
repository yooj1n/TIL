import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import { useDB } from "../context";
import { FlatList, LayoutAnimation, TouchableOpacity } from "react-native";

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

const Record = styled.View`
  background-color: ${colors.cardColor};
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  border-radius: 15px;
`;

const Emotion = styled.Text`
  font-size : 24px;
  margin-right: 10px;
`;

const Message = styled.Text`
  font-size : 18px;
`;

const Separator = styled.View`
height: 10px;
`;

const Home = ({navigation : {navigate}}) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState([]);
  useEffect(() => {
    //컴포넌트가 mount 되었을 때
    const feelings = realm.objects("Feeling");
    //feelings object에 무슨일이 생겼을 때 호출
    feelings.addListener((feelings) => {
      //state에 어떤 변화가 생겼든지 animate 하고 싶어
      LayoutAnimation.spring();
      setFeelings(feelings.sorted("_id", true))
    });
    //컴포넌트가 unmount 되었을 때 event listener를 지워지게함
    return () => {
      feelings.removeAllListeners();
    }
  }, [])
  const onPress = (id) => {
    //delete, update 등 realm.write안에서 실행해줘야함
    realm.write(() => {
      //id에 따라 feeling을 찾고, 삭제
      const feeling = realm.objectForPrimaryKey("Feeling", id);
      realm.delete(feeling);
    })
  }
  return (
    <View>
      <Title>MY STORY</Title>
      <FlatList 
       data={feelings}
       ItemSeparatorComponent={Separator}
       contentContainerStyle={{paddingVertical: 10}}
       keyExtractor={(feeling) => feeling._id + ""} 
       renderItem={({item}) => (
        <TouchableOpacity onPress={() => onPress(item._id)}>
          <Record>
            <Emotion>{item.emotion}</Emotion>
            <Message>{item.message}</Message>
          </Record>
        </TouchableOpacity>
       )}
       />
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color="white" size={40}/>
      </Btn>
    </View>
  )
};

export default Home;