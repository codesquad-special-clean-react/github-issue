// external
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

//internal
import LabelRows from "../view/LabelRows";
import { fetchLabelData, deleteLabelData } from "../api/LabelApi";

import { CreateInfoState } from "../Main";

const SectionContainer = () => {
  const [labelData, setLabelData] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLabelData(await fetchLabelData());
    };
    fetchData();
  }, []);

  const onDelete = (id) => {
    deleteLabelData(id);
  };

  const dispatch = useContext(CreateInfoState);

  return (
    <SectionWrapper>
      <table border="1" width="1000px" align="center">
        <thead>
          <th
            colSpan="3"
            align="left"
            onClick={() =>
              dispatch({
                type: "CREATEINFO",
                labelName: "변경",
                desc: "변경1",
              })
            }
          >
            {labelData?.length} labels
          </th>
        </thead>
        <tbody>
          <LabelRows
            labelData={labelData}
            edit={edit}
            setEdit={setEdit}
            onDelete={onDelete}
          />
        </tbody>
      </table>
    </SectionWrapper>
  );
};

export default SectionContainer;

const SectionWrapper = styled.div`
  width: 1000px;
  margin: 20px auto;
  border: 1px blue dashed;
`;
