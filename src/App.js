import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>BTCHAZ!</h1>
        <p>
          예약 가능한 방탈출 테마 찾으러 가기
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button></Button>
        </a>
      </header>
    </div>
  );
};

export default App;
