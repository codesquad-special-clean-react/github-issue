import styled from "styled-components";
import { useContext, useReducer, useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Labels from "./components/Labels/Labels";
import Milestones from "./components/Milestones/Milestones";
import AddLabelForm from "./components/AddLabelForm/AddLabelForm";

import LabelFetch from "./service/LabelFetch";
import labelsReducer, { LabelsContext } from "./reducer/labelReducer";

function App() {
  const [menu, setMenu] = useState("labels");
  const [isNewForm, setIsNewForm] = useState(false);

  const hiddenLabelForm = () => setIsNewForm(false);
  const openLabelForm = () => setIsNewForm(true);

  const [labels, labelsDispatch] = useReducer(labelsReducer, []);

  const createLabel = async (body) => {
    // try {
    //   const label = await LabelFetch.create(body);
    //   if (label) {
    //     setLabels(labels.concat(label));
    //   }
    // } catch (error) {
    //   console.error(`Create Label Error: ${error}`);
    // }
  };

  const updateLabel = async (updatedLabel) => {
    // try {
    //   const result = await LabelFetch.update(updatedLabel.id, updatedLabel);
    //   if (result.ok) {
    //     setLabels(
    //       labels.map((label) =>
    //         label.id === updatedLabel.id ? updatedLabel : label
    //       )
    //     );
    //   }
    // } catch (error) {
    //   console.error(`Update Label Error: ${error}`);
    // }
  };

  const deleteLabel = async (id) => {
    // try {
    //   const response = await LabelFetch.delete(id);
    //   if (response.ok) {
    //     setLabels(labels.filter((label) => label.id !== id));
    //   }
    // } catch (error) {
    //   console.error(`Delete Label Error: ${error}`);
    // }
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <Menu menu={menu} setMenu={setMenu} openLabelForm={openLabelForm} />
        {menu === "labels" ? (
          <>
            <LabelsContext.Provider value={{ labels, labelsDispatch }}>
              <AddLabelForm
                visible={isNewForm}
                hiddenLabelForm={hiddenLabelForm}
                // createLabel={createLabel}
              />
              <Labels
                // labels={state}
                // setLabels={setLabels}
                updateLabel={updateLabel}
                deleteLabel={deleteLabel}
              />
            </LabelsContext.Provider>
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
