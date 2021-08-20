import React from "react";
type ScreenPropsType = {
    counterValue: number
}

export const Screen: React.FC<ScreenPropsType> = ({counterValue}) => {
    const screenStyles = {
        'border-radius': '10px',
        padding: '100px 200px',
        'background-color': '#F5DF4D',
        'font-size': '9rem',
        'font-weight': 'bold',
        color: counterValue === 5 ? 'red' : '#939597',
        'box-shadow': 'inset 0 0 8px 2px #939597',
    }
    return (
        <div style={screenStyles}>
            {counterValue}
        </div>
    )
}