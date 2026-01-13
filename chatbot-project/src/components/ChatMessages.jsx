import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'

export function ChatMessages ({ messages }) {
  const container = useRef(null)

  useEffect(() => {
    const currentContainer = container.current
    if (currentContainer) {
      currentContainer.scrollTop = currentContainer.scrollHeight
    }
  }, [messages])

  return (
    <div className='messages-container' ref={container}>
      {messages.map((message) => {
        return (
          <ChatMessage
            message={message.message}
            isBot={message.isBot}
            key={message.id}
          />
        )
      })}
    </div>
  )
}
