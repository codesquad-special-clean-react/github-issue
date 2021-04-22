import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TabContainer from './components/TabContainer';
import { tabs } from './utils/constant';

function App() {
  const [selectedTab, selectTab] = useState(tabs.label);
  const [isNewLabelEditorOpened, setNewLabelEditorOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="body">
        <TabContainer selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default App;
