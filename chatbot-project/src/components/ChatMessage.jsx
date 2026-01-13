export function ChatMessage ({ message, isBot }) {
  const side = isBot ? 'botMessage' : 'userMessage'
  const classNames = 'message ' + side

  return (
    <div className={classNames}>
      <div className='message-content'>{message}</div>
      <div className='profile' />
    </div>
  )
}
