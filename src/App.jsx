import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Labels from "./components/Labels/Labels";
import Milestones from "./components/Milestones/Milestones";
import AddLabelForm from "./components/AddLabelForm/AddLabelForm";

function App() {
  const [labels, setLabels] = useState([]);
  const [menu, setMenu] = useState("labels");
  const [newForm, setNewForm] = useState(false);

  const hiddenLabelForm = () => setNewForm(false);
  const openLabelForm = () => setNewForm(true);
  const createLabel = (label) => setLabels(labels.concat(label));
  const updateLabel = (_label) => {
    setLabels(labels.map((label) => (label.id === _label.id ? _label : label)));
  };

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
          <Labels
            labels={labels}
            setLabels={setLabels}
            updateLabel={updateLabel}
          />
        ) : (
          <Milestones />
        )}
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  margin: 1em;
  padding: 1em;
`;

export default App;
