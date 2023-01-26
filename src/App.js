import React from 'react'

import './style.css'

import Quiz from './Quiz'

function App() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div>
        {' '}
        <h5
          style={{ textAlign: 'start' }}
          className="border border-dark  border-top-0 border-start-0 border-end-0 "
        >
          Quiz Application
        </h5>
        <h4
          style={{ textAlign: 'center' }}
          className="border border-dark  border-top-0 border-start-0 border-end-0 mt-2 pb-3"
        >
          Asp.Net Quiz
        </h4>
      </div>

      <div>
        <Quiz />
      </div>
    </div>
  )
}

export default App
