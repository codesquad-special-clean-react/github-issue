import { useState, useEffect } from "react";
import styled from "styled-components";
import IssuesTab from "components/IssuesTab";
import Labels from "components/Labels";
import Milestones from "components/Milestones";
import { getLabelData } from "api";

export default function IssuesPage() {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [labelList, setLabelList] = useState([]);
  const [newLabelInfo, setNewLabelInfo] = useState({});

  const MENU_TAB = {
    0: <Labels labelList={labelList} />,
    1: <Milestones />,
  };

  const menuTabHandler = (id) => {
    setCurrentMenu(id);
  };

  const createLabel = () => {
    console.log("라벨 생성 버튼");
  };

  useEffect(() => {
    getLabelData().then((res) => setLabelList(res));
  }, []);

  return (
    <Container>
      <IssuesTab
        currentMenu={currentMenu}
        menuTabHandler={menuTabHandler}
        createLabel={createLabel}
      />

      {MENU_TAB[currentMenu]}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.container}
`;
