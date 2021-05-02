import React, { useContext } from 'react';
import LabelItem from './LabelItem';
import { LabelContext } from '../../context/LabelContext';
import TableContainer from '../common/TableContainer';

const LabelList = () => {
  const { labelState } = useContext(LabelContext);
  const { labels } = labelState;

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>{labels.length} labels</th>
        </tr>
      </thead>
      <tbody>
        {labels.map((label) => (
          <LabelItem key={label.id} label={label} />
        ))}
      </tbody>
    </TableContainer>
  );
};

export default LabelList;
