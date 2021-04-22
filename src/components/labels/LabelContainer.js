import React from 'react';
import { table, total } from './LabelContainer.module.scss';
import LabelItem from './LabelItem';

const LabelContainer = ({ labels }) => {
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

export default LabelContainer;
