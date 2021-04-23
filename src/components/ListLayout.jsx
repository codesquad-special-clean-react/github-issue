import styled from 'styled-components';

const ListLayout = ({ children }) => {
  return (
    <ListLayoutBlock>
      <ListLayoutHeader>{children.length} labels</ListLayoutHeader>
      <ul>{children}</ul>
    </ListLayoutBlock>
  );
};

const ListLayoutBlock = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
`;

const ListLayoutHeader = styled.div`
  border-bottom: 1px solid lightgray;
  height: 21px;
  padding: 16px;
`;

export default ListLayout;
