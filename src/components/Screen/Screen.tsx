import React from "react";
import s from './Screen.module.css'

type ScreenPropsType = {
    counterValue: number
    maxValue: number
    error: boolean
}

export const Screen: React.FC<ScreenPropsType> = (
    {
        counterValue,
        maxValue,
        error
    }
) => {
    return (
        <div className={s.screen + ' ' + (counterValue === maxValue && s.screen_end)}>
            {error ? 'Error' : counterValue}
        </div>
    )
}