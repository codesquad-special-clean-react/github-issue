import './App.css';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';

function App() {
  return (
    <div className="App">
      <Header message="ISSUES" iconName="book" />
      <Main />
    </div>
  );
}

export default App;
