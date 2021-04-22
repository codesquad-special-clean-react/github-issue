import { useState } from 'react';
import './App.css';
import TabContainer from './components/TabContainer';
import { tabs } from './utils/constant';

function App() {
  const [selectedTab, selectTab] = useState(tabs.label);
  const [isNewLabelEditorOpened, setNewLabelEditorOpen] = useState(false);

  return (
    <div>
      <div className="head">
        <TabContainer selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default App;
