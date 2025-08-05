import React, { useState } from 'react';
import * as Button from '@radix-ui/react-button';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumberClick = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else if (value === '.' && display.includes('.')) {
      return;
    } else {
      setDisplay(display + value);
    }
    setWaitingForSecondValue(false);
  };

  const handleOperationClick = (op) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setWaitingForSecondValue(true);
  };

  const calculateResult = () => {
    if (!previousValue || !operation) return;

    const currentValue = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        if (currentValue === 0) {
          setDisplay('Ошибка');
          return;
        }
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setWaitingForSecondValue(false);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForSecondValue(false);
  };

  const handleBackspace = () => {
    if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <Button.Button className="calculator-button" onClick={handleClear} variant="outline">
          C
        </Button.Button>
        <Button.Button className="calculator-button" onClick={handleBackspace} variant="outline">
          ⌫
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleOperationClick('/')} variant="outline">
          ÷
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('7')} variant="outline">
          7
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('8')} variant="outline">
          8
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('9')} variant="outline">
          9
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleOperationClick('*')} variant="outline">
          ×
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('4')} variant="outline">
          4
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('5')} variant="outline">
          5
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('6')} variant="outline">
          6
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleOperationClick('-')} variant="outline">
          -
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('1')} variant="outline">
          1
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('2')} variant="outline">
          2
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('3')} variant="outline">
          3
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleOperationClick('+')} variant="outline">
          +
        </Button.Button>
        <Button.Button className="calculator-button zero" onClick={() => handleNumberClick('0')} variant="outline">
          0
        </Button.Button>
        <Button.Button className="calculator-button" onClick={() => handleNumberClick('.')} variant="outline">
          ,
        </Button.Button>
        <Button.Button className="calculator-button equal" onClick={calculateResult} variant="default">
          =
        </Button.Button>
      </div>
    </div>
  );
};

export default Calculator;
