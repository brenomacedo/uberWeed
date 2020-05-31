import React from 'react'
import MakeAskings from './src/components/MakeAsking/MakeAskings'
import axios from 'axios'
import { Platform } from 'react-native'

axios.defaults.baseURL = Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://192.168.56.1:3333'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => {
  return (
    <>
      <MakeAskings />
    </>
  )
}

export default App
