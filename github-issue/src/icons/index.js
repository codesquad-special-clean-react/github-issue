import {
  BookOutlined,
  TagOutlined,
  TagsOutlined,
  RedoOutlined,
} from '@ant-design/icons';

const Icon = (iconName) => {
  switch (iconName) {
    case 'book':
      return <BookOutlined />;
    case 'label':
      return <TagOutlined />;
    case 'mileStone':
      return <TagsOutlined />;
    case 'refresh':
      return <RedoOutlined />;
    default:
      break;
  }
};

export default Icon;
