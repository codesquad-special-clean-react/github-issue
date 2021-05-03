import styled from 'styled-components'

export const CreateFormWrap = styled.div`
  display: ${({ isShowForm }) => isShowForm ? 'block' : 'none'};
`
