import React, { useContext } from 'react';
import LabelItem from './LabelItem';
import { LabelContext } from '../../context/LabelContext';
import * as Styled from './LabelListContainer.style';

const LabelListContainer = () => {
  const { labelState } = useContext(LabelContext);
  const { labels } = labelState;

  return (
    <Styled.Table>
      <thead>
        <Styled.TableHeaderRow>{labels.length} labels</Styled.TableHeaderRow>
      </thead>
      <tbody>
        {labels.map(({ id, name, description, color }) => (
          <LabelItem
            key={id}
            id={id}
            name={name}
            description={description}
            color={color}
          />
        ))}
      </tbody>
    </Styled.Table>
  );
};

export default LabelListContainer;
