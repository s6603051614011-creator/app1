import React from 'react';
import { userContext} from './context'
import Header from './context-header'
import Content from './context-content'

export default function App() {
  let [user,setUser] = React.useState()
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header />
      <Content />
    </userContext.Provider>
  )
}
