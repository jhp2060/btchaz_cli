import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const RPage = () => {
  return (
    <div className="App-header">
      <br/><br/>Hi<br/><br/>
      <Link to="/"><Button text="홈으로 돌아가기"/></Link>
      <Button text="그냥 버튼"/>
    </div>
  );
};

export default RPage;