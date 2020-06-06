import React from 'react'
import MakeAskings from './src/components/MakeAsking/MakeAskings'
import axios from 'axios'
import { Platform, YellowBox, StatusBar } from 'react-native'
import Routes from './src/components/Routes/Routes'

axios.defaults.baseURL = Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://192.168.56.1:3333'
YellowBox.ignoreWarnings(['Unrecognized'])
declare const global: {HermesInternal: null | {}}

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Routes />
    </>
  )
}

export default App
