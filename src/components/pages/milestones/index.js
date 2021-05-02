import useFetch from "../../../hooks/useFetch";
import { fetchMileStones } from "../../../apis/milestones";
import MilestoneTable from "../../organisms/milestones/milestone-table";
import { useEffect, useReducer } from "react";
import { reducer, setMilestones } from "../../../reducers/milestones";
import { initialState } from "../../../store";
import { MilestonesContextWrapper } from "./context";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const Milestones = ({ childRoutes }) => {
  const { data, error, loading } = useFetch({ request: fetchMileStones });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { url } = useRouteMatch();
  useEffect(() => {
    if (!error && data) {
      dispatch(setMilestones(data));
    }
  }, [data, error]);

  return (
    <MilestonesContextWrapper value={{ state, dispatch }}>
      {loading || !data ? (
        <div>Loading...</div>
      ) : (
        <Switch>
          <Route exact path={url} component={MilestoneTable} />
          {childRoutes.map(({ path, component: Component }) => {
            return (
              <Route key={path} path={`${url}${path}`} component={Component} />
            );
          })}
        </Switch>
      )}
    </MilestonesContextWrapper>
  );
};

export default Milestones;
