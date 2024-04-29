import { useState } from 'react'
import './App.css'

const Writer = ({ children }) => {
  if (typeof children === 'string') {
    return (
      <div className='word'>
        {children.split('').map((char, index) => {
          switch (char) {
            case 'T':
              return <LetterT key={index}/>;
              case 'E':
                return <LetterE key={index}/>;
            default:
              return <div key={index}></div>;
          }
        })}
      </div>
    )
  }
  return <div>{children}</div>
}

const LetterT = () => {
  return (
    <div className='letter T'>
      <LetterPart />
      <LetterPart style={{ gridRow: "span 3" }} />
      <LetterPart />
    </div>
  )
}

const LetterE = () => {
  return (
    <div className='letter E'>
      <LetterPart style={{ gridColumn: "span 3" }} />
      <LetterPart />
      <LetterPart style={{ gridRow: "3", gridColumn: "span 2" }} />
      <LetterPart style={{ gridRow: "4" }}/>
      <LetterPart style={{ gridRow: "5", gridColumn: "span 3" }} />
    </div>
  )
}

const LetterPart = (props) => {
  const { style } = props;
  return (
    <div style={style} className='letter-part'></div>
  )
}

function App() {

  return (
    <>
      <Writer>TEST</Writer>
    </>
  )
}

export default App
