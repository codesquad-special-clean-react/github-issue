import LabelItemList from '../components/Label/LabelItemList';
import Counter from '../components/Counter';
import { useFetchData } from '../hooks';
import Loading from './Loading';
import { useEffect } from 'react';
import LabelEditor from './LabelForm/LabelEditor';

const Content = ({ tab, isNewBtnClick }) => {
  const REQUEST_URL = `http://localhost:3001/${tab}`;
  const { data, pending, run: fetchData } = useFetchData();
  useEffect(() => {
    fetchData(REQUEST_URL);
  }, [REQUEST_URL]);
  return (
    <>
      {isNewBtnClick && <LabelEditor url={REQUEST_URL} onSubmit={fetchData} />}
      {pending ? (
        <Loading /> // Would implement a loading component later.
      ) : (
        <>
          <Counter count={data.length} itemName={tab} />
          {tab === 'labels' ? (
            <LabelItemList labelList={data} />
          ) : (
            'Milestone page'
          )}
        </>
      )}
    </>
  );
};

export default Content;
