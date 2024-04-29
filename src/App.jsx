import { useState } from 'react'
import './App.css'

const Writer = ({children}) => {
  if(typeof children === 'string') {
    return (
      <div className='word'>
        {children.split('').map((char, index) => (
          <div key={index} className={"letter "+char}></div>
        ))}
      </div>
    )
  }
  return <div>{children}</div>
}

function App() {

  return (
    <>
      <Writer>TEST</Writer>
    </>
  )
}

export default App
