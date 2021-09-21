import React from "react";
import s from "./Counter.module.css";
import {Button} from "../Button/Button";
import {ScreenContainer} from "../Screen/ScreenContainer";

type PropsType = {
    counterValue: number
    maxValue: number
    startValue: number
    error: boolean
    incCounter: () => void
    resetCounter: () => void
}

export const Counter: React.FC<PropsType> = (props) => {
    const {counterValue, maxValue, startValue, error, resetCounter, incCounter} = props

    return (
        <div className={s.counter}>
            <ScreenContainer />
            <div className={s.buttons}>
                <Button
                    name={"INC"}
                    onClick={incCounter}
                    disabled={error || counterValue === maxValue}
                />
                <Button
                    name={"RESET"}
                    onClick={resetCounter}
                    disabled={error || counterValue === startValue}
                />
            </div>
        </div>
    )
}