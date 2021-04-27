import { useEffect, useState } from 'react'
import IssueTableNav from '@components/Nav/IssueTableNav'
import { getLabels } from '@utils/api'
import { LABEL } from '@utils/constant'
import { compareObject } from '@utils/util'
import { HeaderWrap, MainWrap } from './App.style'
import Label from '@components/Label/Label'
import Milestones from '@components/Milestones/Milestones'

function App () {
  const [labels, setLabels] = useState([])
  const [isShowForm, setIsShowForm] = useState(false)

  const getLabelsData = async () => {
    try {
      const labelsData = await getLabels()
      if (compareObject(labelsData, labels)) return
      setLabels(() => [...labelsData])
    } catch (err) {
      console.error(err)
    }
  }

  const onClickNewLabelBtn = async () => {
    await getLabelsData()
    setIsShowForm(() => !isShowForm)
  }

  useEffect(() => {
    getLabelsData()
  }, [])

  return (
    <div>
      <HeaderWrap>{LABEL.TITLE}</HeaderWrap>
      <MainWrap>
        <IssueTableNav openCreateForm={onClickNewLabelBtn}/>
        <Label isShowForm={isShowForm} showForm={onClickNewLabelBtn}
               labels={labels} updateData={getLabelsData}/>
        <Milestones/>
      </MainWrap>
    </div>
  )
}

export default App

