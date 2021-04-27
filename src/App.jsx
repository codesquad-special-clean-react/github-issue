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
  const [isNewForm, setIsNewForm] = useState(false);

  const hiddenLabelForm = () => setIsNewForm(false);
  const openLabelForm = () => setIsNewForm(true);

  const createLabel = async (body) => {
    try {
      const label = await LabelFetch.create(body);
      if (label) {
        setLabels(labels.concat(label));
      }
    } catch (error) {
      console.error(`Create Label Error: ${error}`);
    }
  };

  const updateLabel = async (updatedLabel) => {
    try {
      const result = await LabelFetch.update(updatedLabel.id, updatedLabel);
      if (result.ok) {
        setLabels(
          labels.map((label) =>
            label.id === updatedLabel.id ? updatedLabel : label
          )
        );
      }
    } catch (error) {
      console.error(`Update Label Error: ${error}`);
    }
  };

  const deleteLabel = async (id) => {
    try {
      const response = await LabelFetch.delete(id);
      if (response.ok) {
        setLabels(labels.filter((label) => label.id !== id));
      }
    } catch (error) {
      console.error(`Delete Label Error: ${error}`);
    }
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <Menu menu={menu} setMenu={setMenu} openLabelForm={openLabelForm} />
        {menu === "labels" ? (
          <>
            <AddLabelForm
              visible={isNewForm}
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
