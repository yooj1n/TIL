import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import { useState } from "react/cjs/react.development";
import styled from "styled-components/native";
import { coins } from "../api";
import { DARK_COLOR } from "../colors";

const Container = styled.View`
flex: 1;
background-color: ${DARK_COLOR};
`;

const Loader =styled.View`
flex: 1;
background-color: ${DARK_COLOR};
justify-content: center;
align-items: center;
`;

const Coin = styled.View`
align-items:center;
`;

const CoinName = styled.Text`
color: white;
`;

const CoinSymbol = styled.Text`
color: white;
`;

const Home = () => {
  const {isLoading, data} = useQuery("coins", coins)
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData (
        data.filter((coin) => coin.rank != 0 && coin.is_active && !coin.is_new)
      )
    }
  }, [data])
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" />
      </Loader>
    )
  }
  return (
    <Container>
      <FlatList 
        data={cleanData}
        numColumns={5}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>(
          <Coin>
            <CoinName>{item.name}</CoinName>
            <CoinSymbol>{item.symbol}</CoinSymbol>
          </Coin>
          )}
      />
    </Container>
  )
};

export default Home;