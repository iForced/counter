import React from "react";
import {Screen} from "../Screen/Screen";
import s from "./Counter.module.css";
import {Button} from "../Button/Button";

type PropsType = {
    counterValue: number
    setCounter: (value: number) => void
    maxValue: number
    startValue: number
}

export const Counter: React.FC<PropsType> = (
    {
        counterValue,
        setCounter,
        maxValue,
        startValue
    }
) => {

    const onClickHandler = (name: string) => {
        if (name === 'INC') {
            setCounter(counterValue + 1)
        }
        if (name === 'RESET') {
            setCounter(startValue)
        }
    }

    return (
        <div className={s.counter}>
            <Screen
                counterValue={counterValue}
                maxValue={maxValue}
            />
            <div className={s.buttons}>
                <Button
                    name={"INC"}
                    onClick={onClickHandler}
                    disabled={counterValue === maxValue}
                />
                <Button
                    name={"RESET"}
                    onClick={onClickHandler}
                    disabled={counterValue === startValue}
                />
            </div>
        </div>
    )
}