import useFetch from "../../../hooks/useFetch";
import { fetchMileStones } from "../../../apis/milestones";

const Milestones = () => {
  const { data, error, loading } = useFetch({ request: fetchMileStones });
  console.log(data, error, loading);
  return <div>UNDER CONSTRUCTION</div>;
};

export default Milestones;
