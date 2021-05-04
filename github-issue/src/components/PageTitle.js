import styled from "styled-components";

function PageTitle() {
  return (
    <Title className="title">ISSUES</Title>
  );
}

export default PageTitle;

const Title = styled.div`
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    background-color: #24292f;
    font-size: 20px;
    font-weight: bold;
`
