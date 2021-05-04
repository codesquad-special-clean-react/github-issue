import { useState, useEffect } from "react";
import styled from "styled-components";
import IssuesTab from "components/IssuesTab";
import Labels from "components/Labels";
import Milestones from "components/Milestones";
import { getLabelData, createLabelData } from "api";
import { createHex } from "utils";

export default function IssuesPage() {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [isLabelCreateOpen, setIsLabelCreateOpen] = useState(false);
  const [labelList, setLabelList] = useState([]);
  const [newLabelInfo, setNewLabelInfo] = useState({
    name: "",
    desc: "",
    theme: createHex().hexColor,
  });

  const menuTabHandler = (id) => setCurrentMenu(id);
  const openLabelForm = () => setIsLabelCreateOpen(!isLabelCreateOpen);

  const createLabelInputHandler = ({ target: { value, name } }) => {
    setNewLabelInfo({
      ...newLabelInfo,
      [name]: value,
    });
  };

  const createLabelSubmit = () => {
    createLabelData(newLabelInfo).then(() => {
      setLabelList([...labelList, { id: labelList.length, ...newLabelInfo }]);
      setNewLabelInfo({ ...newLabelInfo, theme: createHex().hexColor });
    });
  };

  const MENU_TAB = [
    <Labels
      labelList={labelList}
      isLabelCreateOpen={isLabelCreateOpen}
      newLabelInfo={newLabelInfo}
      createLabelInputHandler={createLabelInputHandler}
      createLabelSubmit={createLabelSubmit}
    />,
    <Milestones />,
  ];

  useEffect(() => {
    getLabelData().then((res) => {
      setLabelList(res);
    });
  }, []);

  return (
    <Container>
      <IssuesTab
        currentMenu={currentMenu}
        menuTabHandler={menuTabHandler}
        openLabelForm={openLabelForm}
      />

      {MENU_TAB[currentMenu]}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.container}
`;
