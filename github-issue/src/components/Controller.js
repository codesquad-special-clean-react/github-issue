import Button from './Button';
import styled from 'styled-components';

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const ScreenChanger = styled.div`
  display: flex;
`;

const Controller = ({ itemName, onClick }) => {
  const onBtnClick = (e) =>
    onClick(
      e.currentTarget.querySelector('#buttonValue').innerHTML.toLowerCase()
    );
  // 'currentTarget' ref: https://www.carlrippon.com/event-target-v-current-target/
  return (
    <ControllerWrapper>
      <ScreenChanger>
        <Button
          message="Labels"
          fontColor="white"
          buttonColor="blue"
          iconName="label"
          onClick={onBtnClick}
        />
        <Button
          message="Milestones"
          fontColor="black"
          buttonColor="white"
          iconName="mileStone"
          onClick={onBtnClick}
        />
      </ScreenChanger>

      <Button
        message={`New ${itemName}`.slice(0, -1)}
        fontColor="white"
        buttonColor="green"
      />
    </ControllerWrapper>
  );
};

export default Controller;
