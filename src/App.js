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
import { LabelProvider } from 'contexts/useLabel';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Router>
          <Layout>
            <LabelProvider>
              <Switch>
                <Route path="/milestones" component={Milestones}></Route>
                <Route path="/labels" component={Labels}></Route>
                <Redirect to="/labels" />
              </Switch>
            </LabelProvider>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
