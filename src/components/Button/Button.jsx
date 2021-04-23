import { useLocation } from 'react-router';
import { DEFAULT_TAB_NAME } from 'utils/constants';

const Button = ({ className }) => {
  const { pathname } = useLocation();
  const path = pathname.replace('/', '');

  return (
    <button className={className}>
      {path ? `New ${path.slice(0, -1)}` : DEFAULT_TAB_NAME}
    </button>
  );
};

export default Button;
