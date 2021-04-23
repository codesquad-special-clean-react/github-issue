import { useLabel } from 'contexts/useLabel';
import ListLayout from './ListLayout';
import LabelItem from './Label/LabelItem';

const LabelListContainer = () => {
  const { state } = useLabel();

  return (
    <ListLayout>
      {state.labels.map((label, index) => (
        <LabelItem key={index} label={label} />
      ))}
    </ListLayout>
  );
};

export default LabelListContainer;
