import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#000" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#000")};
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 10px;
  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
    font-weight: 800;
    margin-bottom: 10px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  checkSelected,
  setCheckSelected,
}) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (item) => {
    setSelectedNumber(item);
    setCheckSelected("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{checkSelected}</p>
      <div className="flex">
        {array.map((item, idx) => (
          <Box
            isSelected={item === selectedNumber}
            key={idx}
            onClick={() => numberSelectorHandler(item)}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
