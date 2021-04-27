// external
import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';

// internal
import LabelsContainer from './container/LabelsContainer';
import CreateLabelView from './view/CreateLabelView';
import Button from './components/Button';

const Main = () => {
  const [labelOpen, setLabelOpen] = useState(false);
  return (
    <ThemeProvider theme={{}}>
      <Wrapper>
        <Header>
          <h1>ISSUES</h1>
        </Header>
        <SectionWrapper>
          <Nav>
            <Button backgroundColor="skyblue" size="19px" width="150px" color="black">
              Labels
            </Button>
            <Button backgroundColor="white" size="19px" width="150px" color="black">
              Milestones
            </Button>
            <CreateLabel>
              <Button backgroundColor="green" size="19px" width="150px" color="white" onClick={() => setLabelOpen(!labelOpen)}>
                New Labels
              </Button>
            </CreateLabel>
          </Nav>
          {labelOpen && <CreateLabelView setLabelOpen={setLabelOpen} />}
          <LabelsContainer />
        </SectionWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px red solid;
`;

const Header = styled.div`
  background-color: grey;

  h1 {
    color: #ffff;
    text-align: center;
    padding: 10px 0;
  }
`;

const SectionWrapper = styled.div`
  width: 1000px;
  margin: 20px auto;
  border: 1px blue dashed;
`;

const Nav = styled.div`
  margin: 0 0 30px 0;
`;

const CreateLabel = styled.div`
  float: right;
`;
