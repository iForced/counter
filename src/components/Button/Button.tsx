import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    setCounterValue: (value: number) => void
    counterValue: number
    disabled: boolean
    maxValue: number
    startValue: number
}

export const Button: React.FC<ButtonPropsType> = (
    {name, counterValue, setCounterValue, disabled, maxValue, startValue}
) => {
    const onClickHandler = () => {
        if (name === "INC") {
            counterValue < maxValue && setCounterValue(counterValue + 1)
        }
        if (name === "RESET") {
            setCounterValue(startValue)
        }
    }

    return (
        <button
            className={s.button}
            onClick={onClickHandler}
            disabled={disabled}
        >
            {name}
        </button>
    )
}