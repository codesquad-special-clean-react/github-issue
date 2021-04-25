import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalHeader from "components/GlobalHeader";
import IssuesPage from "pages/IssuesPage";

const Routes = () => {
  return (
    <Router>
      <GlobalHeader />
      <Switch>
        <Route exact path="/" component={IssuesPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
