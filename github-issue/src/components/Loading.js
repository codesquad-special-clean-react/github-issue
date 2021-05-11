import styled from 'styled-components';

const LoadingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 75px;
  border: 1px solid black;
`;

const LoadingPage = () => {
  return <LoadingPageWrapper>{'Loading...'}</LoadingPageWrapper>;
};

export default LoadingPage;
