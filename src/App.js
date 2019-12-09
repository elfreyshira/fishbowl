import React from 'react'
// import _ from 'lodash'

import logo from './logo.svg'
import './App.css'


function Button (props) {
  return (
    <button className="button" {...props}>
        {props.children}
    </button>
  )
}


function submitNewEntry(evt, entry, listOfEntries, setListOfEntries, setEntry) {
  evt.preventDefault()
  if (!entry) return false

  setListOfEntries([...listOfEntries, entry])
  setEntry('')
}


function StartScreen ({changePage, listOfEntries, setListOfEntries}) {
  const [entry, setEntry] = React.useState('')

  return (
    <div className="App">
      <form onSubmit={evt => submitNewEntry(evt, entry, listOfEntries, setListOfEntries, setEntry)}>
        <label>
          New entry:
          <input
            type="text"
            value={entry}
            onChange={evt => setEntry(evt.target.value)}
          />
        </label>
        <Button type="submit">Submit Entry</Button>
      </form>

      {
      // put back in if you want to see the list of entries
      //   <ul>
      //   {listOfEntries.map((item)=><li>{item}</li>)}
      // </ul>
      }
      <div>
        Number of entries: {listOfEntries.length}
      </div>

      <Button onClick={() => changePage('play')}>Start Game</Button>
    </div>
  )
}


function PlayScreen ({listOfEntries}) {
  return (
    <div>PLAY BALL!</div>
  )
}

function App () {
  const [page, changePage] = React.useState('start')
  const [listOfEntries, setListOfEntries] = React.useState([])

  if (page === 'start') {
    return <StartScreen {...{changePage, listOfEntries, setListOfEntries}} />
  }
  else if (page === 'play') {
    return <PlayScreen />
  }
  else {
    return <div>nothing</div>
  }
  
}

export default App
