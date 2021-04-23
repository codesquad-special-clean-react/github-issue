import NewLabelSection from "../../organisms/new-label-section";
import IssueTable from "../../organisms/issue-table";

const Labels = ({ openNewLabel, setOpenNewLabel, labels }) => {
  return (
    <>
      {openNewLabel && <NewLabelSection setOpenNewLabel={setOpenNewLabel} />}
      <IssueTable labels={labels} />
    </>
  );
};

export default Labels;
