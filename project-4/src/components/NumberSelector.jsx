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
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const NumberSelector = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {array.map((item, idx) => (
          <Box
            isSelected={item === selectedNumber}
            key={idx}
            onClick={() => setSelectedNumber(item)}
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
