import styled from "styled-components";

const TAB_ITEMS = [
  { id: 0, title: "Labels" },
  { id: 1, title: "Milestones" },
];

export default function IssuesTab({ currentMenu, menuTabHandler }) {
  return (
    <IssuesTabWrapper>
      <IssuesTabMenu>
        {TAB_ITEMS.map(({ id, title }) => {
          return (
            <IssuesTabMenuItem
              key={title}
              active={id === currentMenu}
              onClick={() => {
                menuTabHandler(id);
              }}
            >
              {title}
            </IssuesTabMenuItem>
          );
        })}
      </IssuesTabMenu>

      <CreateLabel bg="green" color="white">
        New Label
      </CreateLabel>
    </IssuesTabWrapper>
  );
}

const IssuesTabWrapper = styled.nav`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
`;

const IssuesTabMenu = styled.ul`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
  overflow: hidden;

  > li + li {
    border-left: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

const IssuesTabMenuItem = styled.li`
  ${({ theme }) => theme.commonButtonStyle}

  border-radius: 0;
  background: ${({ active, theme }) => active && theme.colors.blue};
  color: ${({ active, theme }) => active && theme.colors.white};
`;

const CreateLabel = styled.button`
  ${({ theme }) => theme.commonButtonStyle}

  border: 1px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.green};
`;
