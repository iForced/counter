import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    disabled: boolean
    onClick: (name: string) => void
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name,
        disabled,
        onClick
    }
) => {

    return (
        <button
            className={s.button}
            onClick={() => onClick(name)}
            disabled={disabled}
        >
            {name}
        </button>
    )
}