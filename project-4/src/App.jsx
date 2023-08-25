import { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 11px;
`;

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame onToggle={toggleGamePlay} />}
    </>
  );
}

export default App;
