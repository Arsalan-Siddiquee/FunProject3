import styled from "styled-components";

// Dynamically import dice images
const diceImages = {
  1: new URL("../assets/dice_1.png", import.meta.url).href,
  2: new URL("../assets/dice_2.png", import.meta.url).href,
  3: new URL("../assets/dice_3.png", import.meta.url).href,
  4: new URL("../assets/dice_4.png", import.meta.url).href,
  5: new URL("../assets/dice_5.png", import.meta.url).href,
  6: new URL("../assets/dice_6.png", import.meta.url).href
};

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={diceImages[currentDice] || diceImages[1]} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
