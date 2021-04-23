import { Labels, Milestones } from 'pages';
import GlobalStyle from 'theme/globalStyle';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'theme/theme';
import Layout from 'components/Layout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/milestones" component={Milestones}></Route>
              <Route path="/labels" component={Labels}></Route>
              <Redirect to="/labels" />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
