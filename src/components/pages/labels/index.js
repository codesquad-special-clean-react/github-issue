import NewLabelSection from "../../organisms/new-label-section";
import IssueTable from "../../organisms/issue-table";
import { useEffect, useState } from "react";
import { fetchLabels } from "../../../apis/labels";

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
    <>
      {openNewLabel && <NewLabelSection setOpenNewLabel={setOpenNewLabel} />}
      <IssueTable labels={labels} />
    </>
  );
};

export default Labels;
