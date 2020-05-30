import React from 'react'
import MakeAskings from './src/components/MakeAsking/MakeAskings'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => {
  return (
    <>
      <MakeAskings />
    </>
  )
}

export default App
