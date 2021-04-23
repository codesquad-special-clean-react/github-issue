import ListContainer from 'components/ListContainer';
import { LabelProvider } from 'contexts/useLabel';

const Labels = () => {
  return (
    <section>
      <LabelProvider>
        <ListContainer />
      </LabelProvider>
    </section>
  );
};

export default Labels;
