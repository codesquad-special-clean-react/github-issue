import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import { tabs, TAB_LABEL } from './utils/constant';
import { body } from './App.module.scss';
import LabelContainer from './components/labels/LabelContainer';
import MilestonesContainer from './components/milestones/MilestonesContainer';
import { requestLabels } from './utils/api';

function App() {
  const [selectedTab, selectTab] = useState(tabs.label);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    async function getLabels() {
      const labels = await requestLabels();
      setLabels(() => labels);
    }
    getLabels();
  }, []);

  useEffect(() => {}, [labels]);

  return (
    <div>
      <Header />
      <div className={body}>
        <Navigation selectedTab={selectedTab} />
        {selectedTab === TAB_LABEL ? (
          <LabelContainer labels={labels} />
        ) : (
          <MilestonesContainer />
        )}
      </div>
    </div>
  );
}

export default App;
