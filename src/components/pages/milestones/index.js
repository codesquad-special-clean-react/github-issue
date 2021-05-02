import useFetch from "../../../hooks/useFetch";
import { fetchMileStones } from "../../../apis/milestones";
import MilestoneTable from "../../organisms/milestones/milestone-table";
import { useEffect, useReducer } from "react";
import { reducer, setMilestones } from "../../../reducers/milestones";
import { initialState } from "../../../store";
import { MilestonesContextWrapper } from "./context";

const Milestones = () => {
  const { data, error, loading } = useFetch({ request: fetchMileStones });
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!error && data) {
      dispatch(setMilestones(data));
    }
  }, [data, error]);

  return (
    <MilestonesContextWrapper value={{ state, dispatch }}>
      {loading ? <div>Loading...</div> : <MilestoneTable />}
    </MilestonesContextWrapper>
  );
};

export default Milestones;
