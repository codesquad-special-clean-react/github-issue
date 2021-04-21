import styled from "styled-components";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Labels from "./Labels/Labels";
import Milestones from "./Milestones/Milestones";
import { useState } from "react";

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
