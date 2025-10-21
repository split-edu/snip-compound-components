import { useState } from 'react'
import ButtonsBar from "./ButtonsBar.jsx";
import './App.css'

function App() {
  const [scoreHost, setScoreHost] = useState(0)
  const [scoreGuest, setScoreGuest] = useState(0)
  const upHost = () => setScoreHost(scoreHost + 1)
  const upGuest = () => setScoreGuest(scoreGuest + 1)
  const resetScore = () => {
    setScoreHost(0);
    setScoreGuest(0);
  }
  return (
    <>
      <div className="score-panel">{scoreHost}:{scoreGuest}</div>
      <div className="container">
        <ButtonsBar>
          <ButtonsBar.ScoreUpButton onClick={upHost} />
          <ButtonsBar.ScoreResetButton onClick={resetScore} />
          <ButtonsBar.ScoreUpButton onClick={upGuest} />
        </ButtonsBar>
      </div>
    </>
  )
}

export default App
