import {useState, useEffect} from 'react';

// internal
import {fetchLabelData, deleteLabelData} from '../api/LabelApi';

import Button from '../components/Button';
import Label from '../components/Label';

const LabelsContainer = () => {
  const [edit, setEdit] = useState(false);
  const [labelData, setLabelData] = useState();

  useEffect(async () => {
    setLabelData(await fetchLabelData());
  }, []);

  const onDelete = id => {
    deleteLabelData(id);
  };

  return (
    <table border="1" width="1000px" align="center">
      <thead>
        <th colSpan="3" align="left">
          {labelData?.length} labels
        </th>
      </thead>
      <tbody>
        {labelData &&
          labelData.map((labels, idx) => {
            return (
              <tr key={labels.id}>
                <td>
                  <Label backgroundColor={`${labels.bgColor}`} color="black">
                    {labels.label}
                  </Label>
                </td>
                <td>{labels.text}</td>
                <td>
                  <Button backgroundColor="white" color="black" style={{marginRight: '10px'}} onClick={() => setEdit(true)}>
                    Edit
                  </Button>
                  <Button backgroundColor="white" color="black" onClick={() => onDelete(labels.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default LabelsContainer;
