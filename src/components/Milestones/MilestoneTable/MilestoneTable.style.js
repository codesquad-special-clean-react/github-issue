import styled from 'styled-components'
import { BoxBody } from '../../Labels/LabelTable/LabelTable.style'

export const TableBody = styled(BoxBody)`
  width: 100%;

`
export const TableWrap = styled.div`
  display: ${({updateMode}) => updateMode ? 'none' : 'display'};
`
