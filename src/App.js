import { useState } from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import { tabs } from './utils/constant';
import { body } from './App.module.scss';

function App() {
  const [selectedTab, selectTab] = useState(tabs.label);
  const [isNewLabelEditorOpened, setNewLabelEditorOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className={body}>
        <Navigation selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default App;
