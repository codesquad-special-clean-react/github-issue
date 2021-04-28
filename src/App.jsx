import styled from "styled-components";
import { useReducer, useState } from "react";

import Header from "@components/Header/Header";
import Menu from "@components/Menu/Menu";
import Labels from "@components/Labels/Labels";
import Milestones from "@components/Milestones/Milestones";
import AddLabelForm from "@components/AddLabelForm/AddLabelForm";

import labelsReducer, {
  LabelsContext,
  initialLabels,
} from "@reducer/labelReducer";

function App() {
  const [menu, setMenu] = useState("labels");
  const [isNewForm, setIsNewForm] = useState(false);

  const hiddenLabelForm = () => setIsNewForm(false);
  const openLabelForm = () => setIsNewForm(true);

  const [labels, labelsDispatch] = useReducer(labelsReducer, initialLabels);

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
              />
              <Labels />
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
