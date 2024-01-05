import React from 'react'
import CanvasComponent from './components/CanvasComponent'
import Controls from './components/Controls'

const App = () => {
  return (
    <React.Fragment>
      <Controls/>
      <CanvasComponent/>
    </React.Fragment>
  )
}

export default App