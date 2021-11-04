import { AdMobInterstitial, AdMobRewarded } from "expo-ads-admob";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";
import { useDB } from "../context";

const View = styled.View`
flex: 1;
background-color: ${colors.bgColor};
padding: 0px 30px;
`;
const Title = styled.Text`
color: ${colors.textColor};
margin: 50px 0px;
margin-top: 50px;
text-align: center;
font-size: 28px;
font-weight: 600;
`;
const TextInput = styled.TextInput`
background-color: white;
border-radius: 20px;
padding: 10px 20px;
font-size: 18px;
`;

const Btn = styled.TouchableOpacity`
width: 100%;
background-color: ${colors.btnColor};
margin-top: 30px;
padding: 10px 20px;
align-items: center;
border-radius: 20px;
`;

const BtnText = styled.Text`
color: white;
font-weight: 500;
font-size: 18px;
`;

const Emotions = styled.View`
 flex-direction: row;
 justify-content:space-between;
 margin-bottom: 20px;
`;

const Emotion = styled.TouchableOpacity`
background-color: white;
box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
border-radius: 7px;
padding: 7px;
border-width: ${(props) => (props.selected ? "1px" : "0px")};
border-color: rgba(0,0,0,0.6);
`;

const EmotionText = styled.Text`
font-size: 24px;
`;


const emotions = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

const Write = ({navigation: {goBack}}) => {
  const realm = useDB();
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState("");
  const onChangeText = (text) => setFeelings(text);
  const onEmotionPress = (face) => setEmotion(face);
  const onSubmit = async () => {
    if (feelings === "" || selectedEmotion == null) {
      return Alert.alert("please complete form.")
    }
      // 광고 재생
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/4411468910');
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
      await AdMobInterstitial.showAdAsync();
      //광고가 닫히면 저장하고 홈화면으로 돌아가기
      AdMobInterstitial.addEventListener("interstitialDidClose", () => {
        realm.write(() => {
          //object의 nmae이 Feeling(FeelingSchema참고)
          const feeling = realm.create("Feeling", {
            //properties
            _id: Date.now(),
            emotion: selectedEmotion,
            message: feelings
          });
        });
        goBack();
      })
  };
  return (
    <View>
      <Title>HOW ARE YOU?</Title>
      <Emotions>
      {emotions.map((emotion, index) => (
        <Emotion
        selected={emotion === selectedEmotion}
        key={index} 
        onPress={() => onEmotionPress(emotion)}>
          <EmotionText>{emotion}</EmotionText>
        </Emotion>
      ))}
      </Emotions>
      <TextInput 
      returnKeyType="done"
      onSubmitEditing={onSubmit}
      onChangeText={onChangeText}
      value={feelings}
      placeholder="write your feelings..."/>
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
}

export default Write;