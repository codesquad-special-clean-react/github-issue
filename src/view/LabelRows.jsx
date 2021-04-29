// internal
import React from 'react';
import Button from '../components/Button';
import Label from '../components/Label';

const LabelRows = React.memo(({ labelData, edit, setEdit, onDelete }) => {
  return (
    <>
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
                <Button backgroundColor="white" color="black" style={{ marginRight: '10px' }} onClick={() => setEdit(true)}>
                  Edit
                </Button>
                <Button backgroundColor="white" color="black" onClick={() => onDelete(labels.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
    </>
  );
});

export default LabelRows;
