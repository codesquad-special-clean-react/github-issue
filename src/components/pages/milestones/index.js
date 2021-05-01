import useFetch from "../../../hooks/useFetch";
import { fetchMileStones } from "../../../apis/milestones";
import MilestoneTable from "../../organisms/milestones/milestone-table";

const Milestones = () => {
  const { data, error, loading } = useFetch({ request: fetchMileStones });
  console.log(data, error, loading);
  return <MilestoneTable />;
};

export default Milestones;
