import { useState } from 'react'
// cspell:disable-next-line
import { Chatbot } from 'supersimpledev'

export function ChatInput ({ messages, setMessages }) {
  const [value, setValue] = useState('')

  return (
    <div className='chat-input-container'>
      <input
        className='searchInput'
        placeholder='placeholder'
        size='30'
        value={value}
        onChange={function (e) {
          setValue(e.target.value)
        }}
      />
      <button
        onClick={function () {
          setMessages([
            ...messages,
            {
              message: value,
              id: crypto.randomUUID()
            },
            {
              message: Chatbot.getResponse(value),
              isBot: true,
              id: crypto.randomUUID()
            }
          ])
          setValue('')
        }}
      >
        Send
      </button>
    </div>
  )
}

export default ChatInput
