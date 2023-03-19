import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [result, setResult] = useState('')

  const handleButtonClick = (value) => {
    setResult(result + value)
  }

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  const handleClear = () => {
    setResult('')
  }

  return (
    <div className="calculator">
      <h1>Abdalmunam's Calculator</h1>
      <input type="text" className="result" value={result} readOnly />
      <div className="row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>
          /
        </button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>
          x
        </button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>
          -
        </button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleClear()}>C</button>
        <button className="operator" onClick={() => handleCalculate()}>
          =
        </button>
        <button className="operator" onClick={() => handleButtonClick('+')}>
          +
        </button>
      </div>
    </div>
  )
}

export default Calculator
