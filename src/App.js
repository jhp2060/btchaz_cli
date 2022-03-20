import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RPage from './pages/RPage';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/r" element={<RPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
