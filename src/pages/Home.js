import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1>BTCHAZ!</h1>
      <Link to="/r"><Button text="예약 가능한 방탈출 테마 찾으러 가기"/></Link>
    </div>
  );
};

export default Home;