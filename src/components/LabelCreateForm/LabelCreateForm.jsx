import { LabelCreateFormWrap, } from './LabelCreateForm.style'
import LabelForm from '../LabelForm/LabelForm'

const LabelCreateForm = ({isShowForm = false, showForm }) => {

  return (
    <LabelCreateFormWrap  isShowForm={isShowForm}>
      <LabelForm onClose={showForm}/>
    </LabelCreateFormWrap>
  )
}

export default LabelCreateForm