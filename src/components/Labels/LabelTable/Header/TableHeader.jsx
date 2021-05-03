import { BoxHeader } from './TableHeader.style'
import { LABEL } from '@utils/constant'

const TableHeader = ({totalCount = 0}) => {
  return (
    <BoxHeader>
      <span>{totalCount} {LABEL.LABELS}</span>
    </BoxHeader>
  );
};

export default TableHeader;
