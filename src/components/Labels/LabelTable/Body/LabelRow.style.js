import styled from 'styled-components'
import { LabelCreateFormWrap } from '../../LabelCreateForm/LabelCreateForm.style'

export const LabelUpdateFormWrap = styled(LabelCreateFormWrap)`
  display: ${props => props.isShowForm ? 'block' : 'none'};
  background-color: inherit;
`

export const BoxRow = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(225, 228, 232);
  padding: 16px;
`
export const RowInfo = styled.div`
  width: 100%;
  display: ${props => props.isHideInfo ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  .label-info {
    width: 100%;
    display: flex;
  }

  .btn-list {
    display: flex;
    justify-content: flex-end;

    button {
      background: none;
    }
  }
`

export const LabelName = styled.button`
  height: 24px;
  line-height: 24px;
  background-color: ${props => props.color || "#35946F"};
  padding: 0 10px;
  border-radius: 30px;
  border-color: inherit;
  color: #ffffff;
  font-weight: 300;
`
