import React, { useContext } from 'react';
import { table, total } from './LabelListContainer.module.scss';
import LabelItem from './LabelItem';
import { LabelContext } from '../../context/LabelContext';

const LabelListContainer = () => {
  const { state } = useContext(LabelContext);
  const { labels } = state;

  return (
    <table className={table}>
      <thead>
        <tr className={total}>{labels.length} labels</tr>
      </thead>
      <tbody>
        {labels.map(({ id, name, description, color }) => (
          <LabelItem
            id={id}
            name={name}
            description={description}
            color={color}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LabelListContainer;
