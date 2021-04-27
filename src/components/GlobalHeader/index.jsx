import styled from "styled-components";

export default function GlobalHeader() {
  return (
    <GnbWrapper>
      <Container>ISSUES 💬</Container>
    </GnbWrapper>
  );
}

const GnbWrapper = styled.header`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: #1a385f;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  ${({ theme }) => theme.container}
`;
