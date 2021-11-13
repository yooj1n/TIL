import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useQuery } from "react-query";
import { useState } from "react/cjs/react.development";
import styled from "styled-components/native";
import { coins } from "../api";
import { DARK_COLOR } from "../colors";
import Coin from "../components/Coin";

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

const List = styled.FlatList`
width: 100%;
padding: 20px 10px;
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
      <List 
        data={cleanData}
        numColumns={3}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          justifyContent:"space-between",
        }}
        ItemSeparatorComponent={() => <View style={{height:10}}/>}
        renderItem={({item, index}) => ( 
          <Coin index={index} id={item.id} symbol={item.symbol}/>
        )}
      />
    </Container>
  )
};

export default Home;