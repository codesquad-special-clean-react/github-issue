import {
  BoxRow,
  LabelName,
  LabelUpdateFormWrap,
  RowInfo
} from './LabelRow.style'
import { ALERT_MESSAGE, BTN_LABEL } from '@utils/constant'
import LabelForm from '../../LabelForm/LabelForm'
import { useState } from 'react'
import { LabelAPI } from '@utils/api'

const LabelRow = ({ label, updateData }) => {
  const { id = null, labelName = '', desc = '', color = '#e99695' } = label
  const [isShowUpdateForm, setIsShowUpdateForm] = useState(false)

  const handleCloseBtn = () => {
    setIsShowUpdateForm(() => !isShowUpdateForm)
  }

  const handleDeleteBtn = async () => {
    const result = window.confirm(ALERT_MESSAGE.DELETE)
    if (result === false) return
    try {
      const response = await LabelAPI.deleteLabel({ id })
      if (response.ok === false) {
        throw response.status
      }
      updateData()

    } catch (err) {
      console.error('handleDeleteBtn Error', err)
    }
  }
  return (
    <BoxRow>
      <RowInfo isHideInfo={isShowUpdateForm}>
        <div className="label-info">
          <div className="w-3">
            <LabelName color={color}>{labelName}</LabelName>
          </div>
          <div className="w-7">
            <span>{desc}</span>
          </div>
        </div>
        <div className="btn-list w-2">
          <button onClick={handleCloseBtn}>{BTN_LABEL.EDIT}</button>
          <button onClick={handleDeleteBtn}>{BTN_LABEL.DELETE}</button>
        </div>
      </RowInfo>
      <LabelUpdateFormWrap isShowForm={isShowUpdateForm}>
        <LabelForm {...{ id, labelName, desc, color }}
                   onClose={handleCloseBtn} updateData={updateData}
                   onDelete={handleDeleteBtn}/>
      </LabelUpdateFormWrap>
    </BoxRow>
  )
}

export default LabelRow
