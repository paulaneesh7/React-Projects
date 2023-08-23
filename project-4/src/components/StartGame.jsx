import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
`;

const Button = styled.button`
  min-width: 220px;
  background-color: #000;
  color: #fff;
  padding: 10px 18px;
  border-radius: 11px;
  border: none;
`;

const StartGame = () => {
  return (
    <Container>
      <img src="./images/dices.png" alt="image of dice" />
      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
