import { useLabel } from 'contexts/useLabel';

const ListContainer = ({ children }) => {
  const { labels, dispatch } = useLabel();

  return (
    <div>
      <header>list header</header>
      {children}
    </div>
  );
};

export default ListContainer;
