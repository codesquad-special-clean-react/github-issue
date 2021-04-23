import React from 'react';
import {
  container,
  nameStyle,
  descriptionStyle,
  buttons,
} from './LabelItem.module.scss';

const LabelItem = ({ id, name, description, color }) => {
  return (
    <tr className={container}>
      <td className={nameStyle}>
        <span style={{ background: color }}>{name}</span>
      </td>
      <td className={descriptionStyle}>
        <div>{description}</div>
      </td>
      <td className={buttons}>
        <div>Edit</div>
        <div>Delete</div>
      </td>
    </tr>
  );
};

export default LabelItem;
