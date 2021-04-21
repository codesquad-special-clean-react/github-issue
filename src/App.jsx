import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Labels from "./components/Labels/Labels";
import Milestones from "./components/Milestones/Milestones";
import AddLabelForm from "./components/AddLabelForm/AddLabelForm";

const MainWrapper = styled.div`
  margin: 1em;
  padding: 1em;
`;

function App() {
  const [labels, setLabels] = useState([]);
  const [menu, setMenu] = useState("labels");
  const [newForm, setNewForm] = useState(false);

  const hiddenLabelForm = () => setNewForm(false);
  const openLabelForm = () => setNewForm(true);
  const createLabel = (label) => setLabels(labels.concat(label));

  return (
    <>
      <Header />
      <MainWrapper>
        <Menu menu={menu} setMenu={setMenu} openLabelForm={openLabelForm} />
        <AddLabelForm
          visible={newForm}
          hiddenLabelForm={hiddenLabelForm}
          createLabel={createLabel}
        />
        {menu === "labels" ? (
          <Labels labels={labels} setLabels={setLabels} />
        ) : (
          <Milestones />
        )}
      </MainWrapper>
    </>
  );
}

export default App;
