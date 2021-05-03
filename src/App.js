import {LABEL} from '@utils/constant'
import {HeaderWrap} from './App.style'
import Content from "./components/Contents/Content";

function App () {

  return (
    <div>
      <HeaderWrap>{LABEL.TITLE}</HeaderWrap>
      <Content/>
    </div>
  )
}

export default App

