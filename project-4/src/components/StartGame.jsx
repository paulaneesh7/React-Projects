import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
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
    background-color: #eee;
    border: 1px solid #000;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;

const StartGame = ({ onToggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="image of dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={onToggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
