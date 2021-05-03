import React, { useContext, useState } from 'react'
import { TableBody, TableWrap } from './MilestoneTable.style'
import MilestoneRow from './Body/MilestoneRow'
import TableHeader from './Header/TableHeader'
import { ContentWrap } from '../MilestoneForm/MilestoneForm.style'
import MilestoneForm from '../MilestoneForm/MilestoneForm'
import { deleteMilestone, putMilestone } from '@store/milestone'
import { MilestonesContext } from '@contexts/MilestoneProviderWrapper'

const MilestoneTable = ({ isShowForm }) => {
  const { state: { milestoneData, nav }, dispatch } = useContext(MilestonesContext)

  const [updateMode, setUpdateMode] = useState({
    show: false,
    milestone: null,
  })

  const openUpdateForm = (id) => {
    const milestone = milestoneData.filter(milestone => milestone.id === id)[0]
    setUpdateMode(() => ({ ...updateMode, show: !updateMode.show, milestone }))
  }

  const closeUpdateForm = () => {
    setUpdateMode(() => ({ ...updateMode, show: !updateMode.show }))
  }

  const UpdateMilestoneForm = () => {
    if (updateMode.show) {
      return updateMode.milestone &&
        <MilestoneForm {...updateMode.milestone} onClose={closeUpdateForm}
                       onUpdate={putMilestone(dispatch)}/>
    }

    return null
  }

  const MilesStonesRows = () => milestoneData.map(({
    id,
    title,
    date,
    desc,
    status
  }) => {
    if (status === nav) {
      return (
        <MilestoneRow key={id} {...{ id, title, date, desc, status }}
                      openUpdateForm={openUpdateForm}
                      onUpdate={putMilestone(dispatch)}
                      onDelete={deleteMilestone(dispatch)}/>
      )
    }

  })
  return (
    <ContentWrap isShowForm={isShowForm}>
      <TableWrap updateMode={updateMode.show}>
        <TableHeader/>
        <TableBody>
          <MilesStonesRows/>
        </TableBody>
      </TableWrap>
      <UpdateMilestoneForm/>
    </ContentWrap>
  )
}

export default MilestoneTable
