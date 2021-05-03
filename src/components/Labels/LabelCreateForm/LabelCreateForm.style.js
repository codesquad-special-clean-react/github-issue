import styled from 'styled-components'

export const LabelCreateFormWrap = styled.div`
  display: ${({isShowForm}) => isShowForm ? 'block' : 'none'};
`
