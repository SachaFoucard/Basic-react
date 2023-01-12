import './style/App.css'
import Actors from './Components/Actors'
import DivBG from './Components/DivBG'
import Psyko from './Components/Psyko'

function App() {

  return (
    <div className="App">
      <DivBG />
      <hr/>
      <Actors/>
      <hr/>
      <Psyko/>
      <hr></hr>
    </div>
  )
}

export default App
