import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Box = styled.TouchableOpacity`
width: 200px;
height: 200px;
background-color: tomato;
`

export default function App() {
  return (
    <Container>
      <Box />
    </Container>
  )
}
