import styled from 'styled-components'

export const LabelNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const DeleteBtn = styled.button`
  display: ${props => props.id ? 'block' : 'none'};
  background: none;
`
export const LabelFormWrap = styled.form`
  display: flex;
  width: 100%;
  height: 149px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
  margin-top: 10px;
  box-sizing: border-box;

  input {
    width: 40px;
  }
`
export const InputField = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    height: 30px;
    padding: 0 10px;
    margin-right: 20px;

    &[name="color"] {
      width: 40%;
    }
  }
`
export const Field = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    width: 100%;
  }

  div {
    display: flex;
    flex-wrap: nowrap;
  }
`

export const RanDomBtn = styled.button`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: ${props => props.color};
`

export const FormAction = styled.div`
  width: 30%;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: flex-end;

  button {
    height: 70%;
    margin-left: 5px;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
    border: 1px solid rgba(27, 31, 35, 0.15);

    &[type="submit"] {
      color: #ffffff;
      background-color: rgb(46, 164, 79);
      opacity: ${props => props.name ? 1 : 0.5};
    }
  }
`

