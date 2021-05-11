import LabelItemList from '../components/Label/LabelItemList';
import Counter from '../components/Counter';
import {
  useDeleteData,
  useFetchData,
  usePostData,
  useEditData,
} from '../hooks';
import Loading from './Loading';
import { useEffect } from 'react';
import LabelEditor from './LabelForm/LabelEditor';

const Content = ({ tab, isNewBtnClick, onCancelBtnClick }) => {
  const REQUEST_URL = `http://localhost:3001/${tab}`;
  const { data, pending, run: fetchData } = useFetchData();
  const { run: deleteData } = useDeleteData();
  const { run: postData } = usePostData();
  const { run: editData } = useEditData();
  useEffect(() => {
    fetchData(REQUEST_URL);
  }, [REQUEST_URL]);
  return (
    <>
      {isNewBtnClick && (
        <LabelEditor
          onSubmit={{ url: REQUEST_URL, write: postData, refresh: fetchData }}
          onCancel={onCancelBtnClick}
        />
      )}
      {pending ? (
        <Loading /> // Would implement a loading component later.
      ) : (
        <>
          <Counter count={data.length} itemName={tab} />
          {tab === 'labels' ? (
            <LabelItemList
              labelList={data}
              url={REQUEST_URL}
              onRefresh={fetchData}
              onSubmit={{
                url: REQUEST_URL,
                write: editData,
                refresh: fetchData,
              }}
              onDelete={deleteData}
            />
          ) : (
            'Milestone page'
          )}
        </>
      )}
    </>
  );
};

export default Content;
