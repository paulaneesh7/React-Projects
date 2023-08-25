import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  background-color: #000;
  color: #fff;
  padding: 10px 18px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;

// All properties of Button is already available here, so here we can add the additional ones
export const OutlineButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  &:hover {
    background-color: #000;
    border: 1px solid transparent;
    color: #fff;
  }
`;
