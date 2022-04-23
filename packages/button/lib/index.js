import React from "react";
import styled from "styled-components";

const StyledComponent = styled.button`
  padding: 12px 24px;
  background-color: #121a3e;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const Component = ({ onClick, children }) => {
  return <StyledComponent onClick={onClick}>{children}</StyledComponent>
};

export default Component;