import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 75px;
  border: 1px solid black;
`;

const Counter = ({ count, itemName }) => (
  <CounterWrapper>{`${count} ${itemName}`}</CounterWrapper>
);

export default Counter;
