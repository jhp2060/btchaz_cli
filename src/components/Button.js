import styled from 'styled-components';
import React, { useState } from 'react';

const Button = () => {
  const [state, setState] = useState(200);
  return <StyledButton>{state}</StyledButton>
};

const StyledButton = styled.button`

`;

export default Button;