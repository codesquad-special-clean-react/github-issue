import React, { useState } from 'react'
import {
  DeleteBtn,
  Field,
  FormAction,
  InputField,
  LabelFormWrap,
  LabelNameWrap,
  RanDomBtn
} from './LabelForm.style'
import { LabelName } from '../LabelTable/Body/LabelRow.style'
import { makeRandomColor } from '@utils/util'
import { LabelAPI } from '@utils/api'
import { BTN_LABEL, FORM_LABEL } from '@utils/constant'

const LabelForm = ({
  id = null,
  labelName = '',
  desc = '',
  color = '#35946F',
  onClose,
  updateData
}) => {
  const [labelData, setLabelData] = useState({
    id,
    labelName,
    desc,
    color
  })

  const handleClickMakeColor = (e) => {
    e.preventDefault()
    const color = makeRandomColor()
    setLabelData(() => ({ ...labelData, color }))
  }

  const handleChangeLabelData = ({ target: { name, value } }) => {
    setLabelData(() => ({ ...labelData, [name]: value }))
  }

  const handleUpdateLabel = async (id, labelData) => {
    if (id) {
      return LabelAPI.putLabel(labelData)
    }

    return LabelAPI.postLabel(labelData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await handleUpdateLabel(id, labelData)
      if (response.ok === false) {
        throw response.status
      }
      setLabelData(() => ({
        labelName: '',
        desc: '',
        color: '#35946F'
      }))
      onClose()
      updateData && updateData()

    } catch (err) {
      console.error(err)
    }
  }

  const handleCloseModal = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <>
      <LabelNameWrap>
        <LabelName
          color={labelData.color}>{labelData.labelName ? labelData.labelName : 'Label preview'}</LabelName>
        <DeleteBtn id={labelData.id}>{BTN_LABEL.DELETE}</DeleteBtn>
      </LabelNameWrap>
      <LabelFormWrap onSubmit={handleSubmit}>
        <InputField>
          <Field>
            <label htmlFor="labelName">{FORM_LABEL.NAME}</label>
            <input id="labelName"
                   type="text"
                   name="labelName"
                   value={labelData.labelName}
                   onChange={handleChangeLabelData}/>
          </Field>
          <Field>
            <label htmlFor="desc">{FORM_LABEL.DESC}</label>
            <input id="desc"
                   type="text"
                   name="desc"
                   value={labelData.desc}
                   onChange={handleChangeLabelData}/>
          </Field>
          <Field>
            <label htmlFor="color">{FORM_LABEL.Color}</label>
            <div>
              <RanDomBtn name="random" onClick={handleClickMakeColor}
                         color={labelData.color}>{BTN_LABEL.RANDOM}</RanDomBtn>
              <input id="color"
                     type="text"
                     name="color"
                     value={labelData.color}
                     onChange={handleChangeLabelData}/>
            </div>
          </Field>
        </InputField>
        <FormAction name={labelData.labelName}>
          <button className="close"
                  onClick={handleCloseModal}>{BTN_LABEL.CANCEL}</button>
          <button type="submit"
                  disabled={labelData.labelName.length < 0}>{BTN_LABEL.SAVE}</button>
        </FormAction>
      </LabelFormWrap>
    </>
  )
}

export default LabelForm
