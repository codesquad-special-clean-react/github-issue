import { useState } from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import { tabs, TAB_LABEL } from './utils/constant';
import { body } from './App.module.scss';
import LabelContainer from './components/labels/LabelContainer';
import MilestonesContainer from './components/milestones/MilestonesContainer';

function App() {
  const [selectedTab, selectTab] = useState(tabs.label);

  const SelectedContainer = (() => {
    if (selectedTab === TAB_LABEL) {
      return <LabelContainer />;
    }
    return <MilestonesContainer />;
  })();

  return (
    <div>
      <Header />
      <div className={body}>
        <Navigation selectedTab={selectedTab} />
        {SelectedContainer}
      </div>
    </div>
  );
}

export default App;
