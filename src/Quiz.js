import React, { useEffect, useState } from 'react'
import './style.css'
import quiz from './QuizData.json'
import Form from 'react-bootstrap/Form'
import { PieChart, Pie, Cell } from 'recharts'
const Quiz = () => {
  const [question, setquestion] = useState(0)
  const [score, setscore] = useState(0)
  const [showscore, setshowscore] = useState(false)
  const [time, setTime] = useState(60)
  const [timeleft, setTimeleft] = useState(false)
  const [enable, setEnable] = useState(false)

  const currentQuestion = quiz[question]

  const selectoptions = (index) => {
    if (currentQuestion.answer === currentQuestion.option[index]) {
      setscore(score + 1)
    }
  }
  if (question === 9 && time <= 0) {
    setshowscore(false)
    setTimeleft(false)
    setquestion(9)
  }
  if (time <= 0) {
    setquestion(question + 1)

    setTime(60)
  }

  const startQuiz = () => {
    setTimeleft(true)
    if (startQuiz) {
      setEnable(true)
    }
  }

  useEffect(() => {
    if (timeleft === true) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [time, timeleft])
  const reset = () => {
    setshowscore(false)
    setquestion(0)
    setscore(0)
    setTime(60)
    setTimeleft(false)
  }
  const first = () => {
    setquestion(0)
  }
  const prev = () => {
    const nextquestion = question - 1
    if (nextquestion < quiz.length) {
      setquestion(question - 1)
    } else {
      setTimeleft(false)
      setTime(0)
    }
    if (nextquestion < 0) {
      setquestion(0)
    }
  }

  const next = () => {
    const nextquestion = question + 1
    if (nextquestion < quiz.length) {
      setquestion(question + 1)
    } else {
      setTimeleft(false)
      setTime(0)
    }
    if (time !== 60) {
      setTime(60)
    }
    if (nextquestion > 9) {
      setquestion(9)
    }
  }
  const last = () => {
    setquestion(9)
  }
  const review = () => {
    const nextquestion = question - 1
    if (nextquestion < quiz.length) {
      setquestion(question - 1)
    }

    if (nextquestion < 0) {
      setquestion(0)
    }
  }
  const submit = (e) => {
    e.preventDefault()
    if (question === 9) {
      setshowscore(true)

      setTimeleft(false)
    }
  }
  const data = [
    { name: 'score', value: score },
    { name: 'quiz', value: quiz.length },
  ]
  console.log(data)
  return (
    <div className="quiz-container">
      {showscore ? (
        <div style={{ textAlign: 'center' }}>
          <h1>
            score is {score} / {quiz.length}
          </h1>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              <Cell fill="#82ca9d" nameKey="score" />
              <Cell fill="#ffc658" nameKey="Total" />
            </Pie>
          </PieChart>

          <button
            onClick={reset}
            style={{
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-question">
          <div
            style={{
              fontSize: '15px',
              textAlign: 'start',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            className="border border-dark  border-top-0 border-start-0 border-end-0 pb-1"
          >
            <div
              style={{
                background: 'orange',
                padding: '2px',
                color: '#000',
                fontSize: '12px',
              }}
            >
              Question {question + 1} of {quiz.length}
            </div>

            <div style={{ color: '#000', fontSize: '12px' }}>
              {' '}
              Time Remain: {time}
            </div>
          </div>
          <p style={{ fontsize: '10px' }}>{currentQuestion.question}</p>

          <div className="quiz-option">
            <div className="quiz-ul">
              {currentQuestion.option.map((options, index) => (
                <Form
                  className="quiz-li"
                  onClick={() => selectoptions(index)}
                  key={index}
                  name="score"
                >
                  {options}
                </Form>
              ))}
            </div>
          </div>
          <div className="quiz-button border border-dark  border-bottom-0 border-start-0 border-end-0 ">
            <button onClick={first} disabled={!enable}>
              First
            </button>
            <button onClick={prev} disabled={!enable}>
              Prev
            </button>
            <button onClick={next} disabled={!enable || question >= 9}>
              Next
            </button>
            <button onClick={last} disabled={!enable}>
              Last
            </button>
          </div>
          <div className="quiz-subbutton">
            {' '}
            <button onClick={() => setquestion(0)} disabled={!enable}>
              1
            </button>
            <button onClick={() => setquestion(1)} disabled={!enable}>
              2
            </button>
            <button onClick={() => setquestion(2)} disabled={!enable}>
              3
            </button>
            <button onClick={() => setquestion(3)} disabled={!enable}>
              4
            </button>
            <button onClick={() => setquestion(4)} disabled={!enable}>
              5
            </button>
            <button onClick={() => setquestion(5)} disabled={!enable}>
              6
            </button>
            <button onClick={() => setquestion(6)} disabled={!enable}>
              7
            </button>
            <button onClick={() => setquestion(7)} disabled={!enable}>
              8
            </button>
            <button onClick={() => setquestion(8)} disabled={!enable}>
              9
            </button>
            <button onClick={() => setquestion(9)} disabled={!enable}>
              10
            </button>
          </div>
          <div
            style={{ textAlign: 'start', display: 'flex', columnGap: '5px' }}
          >
            <button onClick={startQuiz} className="buttons">
              Quiz
            </button>
            <button className="buttons" onClick={review}>
              Review
            </button>
            <button className="buttons" onClick={submit}>
              Submit quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz
