import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [checkSelected, setCheckSelected] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (!selectedNumber) {
      setCheckSelected("Selected a number please!!!!");
      return;
    }

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
            checkSelected={checkSelected}
            setCheckSelected={setCheckSelected}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
        </div>
        {showRules && <Rules />}
      </MainContainer>
    </>
  );
};

export default GamePlay;
