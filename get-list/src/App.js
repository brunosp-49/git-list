import React from "react";
import RoutePage from "./Router/Route";
import styled from 'styled-components'

const MainContainer = styled.div`
padding: 3vh;

`


function App() {
  return (
    <MainContainer>
      <RoutePage/>
    </MainContainer>
  );
}

export default App;
