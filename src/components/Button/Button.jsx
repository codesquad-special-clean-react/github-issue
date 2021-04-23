import { useLocation } from 'react-router';
import { DEFAULT_TAB_NAME } from 'utils/constants';

const Button = (props) => {
  const { pathname } = useLocation();
  const path = pathname.replace('/', '');

  return (
    <button {...props}>
      {path ? `New ${path.slice(0, -1)}` : DEFAULT_TAB_NAME}
    </button>
  );
};

export default Button;
