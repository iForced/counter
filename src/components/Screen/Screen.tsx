import React from "react";

type ScreenPropsType = {
    counterValue: number
}

export const Screen: React.FC<ScreenPropsType> = ({counterValue}) => {
    const screenStyles = {
        borderRadius: '10px',
        padding: '100px 200px',
        backgroundColor: '#F5DF4D',
        fontSize: '9rem',
        fontWeight: 900,
        color: counterValue === 5 ? 'red' : '#939597',
        boxShadow: 'inset 0 0 8px 2px #939597',
    }
    return (
        <div style={screenStyles}>
            {counterValue}
        </div>
    )
}