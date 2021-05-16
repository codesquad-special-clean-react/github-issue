import '../css/App.css';
import PageTitle from './PageTitle'
import Main from './Main'
import NewMilestone from "./milestone/NewMilestone";
import {PageBody} from "../components/templates/Common";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <PageTitle/>
      <PageBody>
        <Router>
          <Route exact path="/" component={Main}/>
          <Route path="/new/:id" component={NewMilestone}/>
        </Router>
      </PageBody>
    </>
  );
}

export default App;