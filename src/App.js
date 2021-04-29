import { useContext } from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import { TAB_LABEL, TAB_MILESTONES } from './utils/constant';
import { body } from './App.module.scss';
import LabelContainer from './components/labels/LabelContainer';
import MilestonesContainer from './components/milestones/MilestonesContainer';
import { AppContext } from './context/AppContext';

function App() {
  const { appState } = useContext(AppContext);
  const { selectedTab } = appState;

  const SelectedContainer = (() => {
    switch (selectedTab) {
      case TAB_LABEL:
        return <LabelContainer />;
      case TAB_MILESTONES:
        return <MilestonesContainer />;
      default:
        throw new Error('Any tab is selected.');
    }
  })();

  return (
    <div>
      <Header />
      <div className={body}>
        <Navigation />
        {SelectedContainer}
      </div>
    </div>
  );
}

export default App;
