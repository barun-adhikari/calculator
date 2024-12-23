import React, {useState} from "react";
import Button from "./button"

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleCLick = (value) => {
        if(value === 'C') {
            setInput('');
        } else if(value === '='){
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput(error);
            } 
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+'],
        ['C'],
    ];

    return  (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
            {buttons.map((row, rowindex) => (
                <div key={rowindex} className="button-row">
                    {row.map((value) => (
                        <Button key={value} value={value} onClick={handleCLick} />
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
};

export default Calculator;