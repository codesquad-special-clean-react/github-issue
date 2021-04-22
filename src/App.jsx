import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Labels from "./components/Labels/Labels";
import Milestones from "./components/Milestones/Milestones";
import AddLabelForm from "./components/AddLabelForm/AddLabelForm";

import LabelFetch from "./service/LabelFetch";

function App() {
  const [labels, setLabels] = useState([]);
  const [menu, setMenu] = useState("labels");
  const [newForm, setNewForm] = useState(false);

  const hiddenLabelForm = () => setNewForm(false);
  const openLabelForm = () => setNewForm(true);

  const createLabel = async (body) => {
    setLabels(labels.concat(body));
    const result = await LabelFetch.create(body);
    result ? console.log("성공") : console.log("실패");
  };

  const updateLabel = async (updatedLabel) => {
    setLabels(
      labels.map((label) =>
        label.id === updatedLabel.id ? updatedLabel : label
      )
    );
    const result = await LabelFetch.update(updatedLabel.id, updatedLabel);
    result ? console.log("성공") : console.log("실패");
  };

  const deleteLabel = async (id) => {
    setLabels(labels.filter((label) => label.id !== id));
    await LabelFetch.delete(id);
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <Menu menu={menu} setMenu={setMenu} openLabelForm={openLabelForm} />
        {menu === "labels" ? (
          <>
            <AddLabelForm
              visible={newForm}
              hiddenLabelForm={hiddenLabelForm}
              createLabel={createLabel}
            />
            <Labels
              labels={labels}
              setLabels={setLabels}
              updateLabel={updateLabel}
              deleteLabel={deleteLabel}
            />
          </>
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
