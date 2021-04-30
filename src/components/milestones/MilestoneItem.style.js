import styled from 'styled-components';

const Td = styled.td`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;

  & > * {
    margin-bottom: 20px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const H2 = styled.h2`
  margin-top: 0;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 5px;
  }
`;

const Span = styled.span`
  margin-right: 20px;
  font-weight: 600;
`;

const Button = styled.button`
  color: ${({ color }) => color};
  border-style: none;
  background: transparent;
  padding: 0;
  margin: 0;
  margin-right: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
`;

export { Td, H2, DateContainer, Span, Button };
