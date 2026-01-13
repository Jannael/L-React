import { useState } from 'react'
import { ChatMessages } from './components/ChatMessages'
import { ChatInput } from './components/ChatInput'

import './App.css'

function App () {
  const [messages, setMessages] = useState([])

  return (
    <>
      <ChatMessages messages={messages} />
      <ChatInput messages={messages} setMessages={setMessages} />
    </>
  )
}

export default App
