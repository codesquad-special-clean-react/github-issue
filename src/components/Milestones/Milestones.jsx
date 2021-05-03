import { MilesStoneWrap, } from './Milestones.style'
import MilestoneCreateForm from './MilestoneCreateForm/MilestoneCreateForm'
import MilestoneTable from './MilestoneTable/MilestoneTable'
import MilestoneProviderWrapper from '@contexts/MilestoneProviderWrapper'

const Milestones = ({isShowForm = false, toggleForm}) => {
  return (
    <MilestoneProviderWrapper {...{toggleForm}}>
      <MilesStoneWrap>
        <MilestoneCreateForm isShowForm={isShowForm}/>
        <MilestoneTable isShowForm={isShowForm}/>
      </MilesStoneWrap>
    </MilestoneProviderWrapper>
  )
}

export default Milestones
