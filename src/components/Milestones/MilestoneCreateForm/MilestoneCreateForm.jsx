import React, { useContext } from 'react'
import { CreateFormWrap } from './MilestoneCreateForm.style'
import MilestoneForm from '../MilestoneForm/MilestoneForm'
import { postMilestone } from '@store/milestone'
import { MilestonesContext } from '@contexts/MilestoneProviderWrapper'

const MileStoneCreateForm = ({isShowForm}) => {
  const { dispatch } = useContext(MilestonesContext)
  return (
    <CreateFormWrap isShowForm={isShowForm}>
      <MilestoneForm onCreate={postMilestone(dispatch)}/>
    </CreateFormWrap>
  )
}

export default MileStoneCreateForm
