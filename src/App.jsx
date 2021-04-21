import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Labels from "./components/Labels/Labels";
import Milestones from "./components/Milestones/Milestones";

const MainWrapper = styled.div`
  margin: 1em;
  padding: 1em;
`;

function App() {
  const [menu, setMenu] = useState("labels");

  return (
    <>
      <Header />
      <MainWrapper>
        <Menu menu={menu} setMenu={setMenu} />
        {menu === "labels" ? <Labels /> : <Milestones />}
      </MainWrapper>
    </>
  );
}

export default App;
