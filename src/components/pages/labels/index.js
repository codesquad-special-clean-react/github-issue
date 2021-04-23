import NewLabelSection from "../../organisms/new-label-section";
import IssueTable from "../../organisms/issue-table";
import { useEffect, useState } from "react";
import { fetchLabels } from "../../../apis/labels";
import { LabelsContext } from "./context";

const Labels = ({ openNewLabel, setOpenNewLabel }) => {
  const [labels, setLabels] = useState([]);
  const setLabelsFromServer = () => {
    fetchLabels()
      .then((data) => {
        setLabels(data);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    setLabelsFromServer();
  }, []);

  return (
    <LabelsContext.Provider value={{ setLabelsFromServer }}>
      {openNewLabel && <NewLabelSection setOpenNewLabel={setOpenNewLabel} />}
      <IssueTable labels={labels} fetchLabels={fetchLabels} />
    </LabelsContext.Provider>
  );
};

export default Labels;
