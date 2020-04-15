import React from 'react'

const CalculatorDisplay = (props) => {
    return(
        <input 
            readOnly={true} 
            value={props.text} 
            className="calculator-display" 
          />
    );
}

export default CalculatorDisplay;