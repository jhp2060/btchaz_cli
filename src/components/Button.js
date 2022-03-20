import styled from 'styled-components';
import React, { useState } from 'react';

const Button = ({ text }) => {
  // const [state, setState] = useState(200);
  // return <StyledButton onClick={() => setState(state + 1)}>{text} {state}</StyledButton>
  return (
    <StyledButton>{text}</StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 20px;
  margin: 10px;
  border: unset;
  border-radius: 200px;
  background: cornflowerblue;
  color: cornsilk;
  vector-effect: non-scaling-stroke;

  :hover {
    color: cornsilk;
    background: mediumaquamarine;
  }
`;

export default Button;