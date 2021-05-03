import { BoxBody, BoxWrap } from './LabelTable.style'
import LabelRow from './Body/LabelRow'
import TableHeader from './Header/TableHeader'

const LabelTable = ({labels, updateData}) => {
  const totalCount = labels.length;
  const LabelsRows = () => labels.map((label) => <LabelRow key={label.id} label={label} updateData={updateData}/>)
  return (
    <BoxWrap>
      <TableHeader totalCount={totalCount}/>
      <BoxBody>
        <LabelsRows/>
      </BoxBody>
    </BoxWrap>
  );
};


export default LabelTable;
