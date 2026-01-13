import { Buttons } from './Buttons'
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('')
  
  return (
    <>
      <main className='bg-bg p-5 rounded-2xl'>
        <article className='h-14 text-right py-5 pr-2'>{display}</article>
        <Buttons setDisplay={setDisplay} />
      </main>
    </>
  )
}

export default App
