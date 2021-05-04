import styled from "styled-components";

const TAB_ITEMS = [
  { id: 0, title: "Labels" },
  { id: 1, title: "Milestones" },
];

export default function IssuesTab(props) {
  const { currentMenu, menuTabHandler, openLabelForm } = props;

  return (
    <IssuesTabWrapper>
      <IssuesTabMenu>
        {TAB_ITEMS.map(({ id, title }) => {
          return (
            <IssuesTabMenuItem
              key={id}
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

      <CreateLabel onClick={openLabelForm}>New Label</CreateLabel>
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
  padding: 7px 13px;
  border-radius: 0;
  background: ${({ active, theme }) => active && theme.colors.blue};
  color: ${({ active, theme }) => active && theme.colors.white};
  cursor: pointer;
`;

const CreateLabel = styled.button`
  ${({ theme }) => theme.commonButtonStyle}
`;
