import React from "react";
import s from './Screen.module.css'

type ScreenPropsType = {
    counterValue: number
    maxValue: number
}

export const Screen: React.FC<ScreenPropsType> = ({counterValue, maxValue}) => {
    return (
        <div className={s.screen + ' ' + (counterValue === maxValue && s.screen_end)}>
            {counterValue}
        </div>
    )
}