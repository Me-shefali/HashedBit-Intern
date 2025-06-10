import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = (operator) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResult('Please enter valid numbers');
            return;
        }

        switch (operator) {
            case '+':
                setResult(a + b);
                break;
            case '-':
                setResult(a - b);
                break;
            case '*':
                setResult(a * b);
                break;
            case '/':
                b !== 0 ? setResult(a / b) : setResult('Cannot divide by zero');
                break;
            default:
                setResult('Invalid Operation');
        }
    };

    return (
        <div className="calculator-container">
            <h2>Simple Calculator</h2>
            <input
                type="text"
                placeholder="First Number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="calculator-input"
            />
            <input
                type="text"
                placeholder="Second Number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="calculator-input"
            />
            <div className="calculator-buttons">
                <button onClick={() => handleCalculate('+')}>Add</button>
                <button onClick={() => handleCalculate('-')}>Subtract</button>
                <button onClick={() => handleCalculate('*')}>Multiply</button>
                <button onClick={() => handleCalculate('/')}>Divide</button>
            </div>
            <div className="calculator-result">
                Result: {result}
            </div>
        </div>
    );

};

export default Calculator;
