import React, { useContext, useState } from 'react'
import {
  CreateForm,
  CreateFormHeader,
  FormBtn,
  FormLabel
} from './MilestoneForm.style'
import { BTN_LABEL } from '@utils/constant'
import { MilestonesContext } from '@contexts/MilestoneProviderWrapper'

const MilestoneForm = ({
  id = null,
  title = '',
  date = '',
  desc = '',
  status = 'open',
  onCreate = null,
  onUpdate = null,
  onClose = null
}) => {
  const [milestoneData, setMilestoneData] = useState({
    id,
    title,
    date,
    desc,
    status
  })
  const { toggleForm } = useContext(MilestonesContext)
  const handleChangeMilestoneData = ({ target: { name, value } }) => {
    setMilestoneData(() => ({ ...milestoneData, [name]: value }))
  }

  const handleCancel = () => {
    onClose && onClose()
  }

  const handleClose = () => {
    onUpdate({ ...milestoneData, status: 'close' })
    onClose && onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      onUpdate(milestoneData)
      onClose()
      return false;
    }

    onCreate(milestoneData)
    setMilestoneData(() => ({
      title: '',
      date: '',
      desc: '',
      status: 'open'
    }))
    toggleForm()

  }
  return (
    <>
      <CreateFormHeader id={id}>
        <h3>New milestone</h3>
        <span>Create a new milestone to help organize your issues and pull requests. Learn more about milestones and issues.</span>
      </CreateFormHeader>
      <CreateForm onSubmit={handleSubmit}>
        <FormLabel>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={milestoneData.title}
            onChange={handleChangeMilestoneData}
          />
        </FormLabel>
        <FormLabel>
          <label htmlFor="date">Due date(optional)</label>
          <input
            type="date"
            id="date"
            name="date"
            pattern="\d\d\d\d-\d\d-\d\d"
            placeholder="yyyy-mm-dd"
            value={milestoneData.date}
            onChange={handleChangeMilestoneData}
          />
        </FormLabel>
        <FormLabel>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            cols="20"
            rows="13"
            maxLength="8192"
            value={milestoneData.desc}
            onChange={handleChangeMilestoneData}
          />
        </FormLabel>
        <FormBtn id={id} title={milestoneData.title}>
          <button name="cancel" onClick={handleCancel}>{BTN_LABEL.CANCEL}</button>
          <button name="close" onClick={handleClose}>{BTN_LABEL.CLOSE_MILESTONE}</button>
          <button type="submit">{id ? BTN_LABEL.SAVE_MILESTONE : BTN_LABEL.CREATE_MILESTONE} </button>
        </FormBtn>
      </CreateForm>
    </>
  )
}

export default MilestoneForm
