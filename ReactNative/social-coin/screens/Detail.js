import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory-native";
import { history, info } from "../api";
import { DARK_COLOR } from "../colors";
import { Icon } from "../components/Coin";

const Container = styled.View`
  flex: 1;
  background-color: ${DARK_COLOR};
  padding-top: 20px;
`;

const Detail = ({navigation, route : {params : {symbol, id}}}) => { 
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Icon
      source={{
        uri:`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`
      }}
    />
  })
},[])
const {isLoading: infoLoading, data: infoData} = useQuery(["coinInfo", id], info);
const {isLoading: historyLoading, data: historyData} = useQuery(["coinHistory", id], history);
const [victoryData, setVictoryData] = useState(null);
useEffect(() => {
  if (historyData) {
    setVictoryData(
      historyData.map((price) => ({
        x: new Date(price.timestamp).getTime(),
        y: price.price,
      }))
    );
  }
}, [historyData]);
return (
  <Container>
    {victoryData ? (
      <VictoryChart height={360}>
        <VictoryLine
          animate
          interpolation="monotoneX"
          data={victoryData}
          style={{ data: { stroke: "#f1c40f" } }}
        />
        <VictoryScatter
          data={victoryData}
          style={{ data: { fill: "#f1c40f" } }}
        />
      </VictoryChart>
    ) : null}
  </Container>
);
};
export default Detail;