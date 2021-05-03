import { LabelCreateFormWrap, } from './LabelCreateForm.style'
import LabelForm from '../LabelForm/LabelForm'

const LabelCreateForm = ({isShowForm = false, toggleForm, updateData}) => {

  return (
    <LabelCreateFormWrap  isShowForm={isShowForm}>
      <LabelForm onClose={toggleForm} updateData={updateData}/>
    </LabelCreateFormWrap>
  )
}

export default LabelCreateForm
