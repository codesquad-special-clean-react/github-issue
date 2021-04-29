//external
import styled from "styled-components";

const HeaderView = () => {
  return (
    <Header>
      <h1>ISSUES</h1>
    </Header>
  );
};

export default HeaderView;

const Header = styled.div`
  background-color: grey;

  h1 {
    color: #ffff;
    text-align: center;
    padding: 10px 0;
  }
`;
