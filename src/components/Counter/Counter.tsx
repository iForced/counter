import React from "react";
import {Screen} from "../Screen/Screen";
import s from "./Counter.module.css";
import {Button} from "../Button/Button";
import {CounterPropsType} from "./CounterContainer";

export const Counter: React.FC<CounterPropsType> = (
    {
        counterValue,
        maxValue,
        startValue,
        error,
        incCounter,
        resetCounter,
    }
) => {

    const onIncCounter = () => {
        incCounter()
    }
    const onResetCounter = () => {
        resetCounter()
    }

    return (
        <div className={s.counter}>
            <Screen
                counterValue={counterValue}
                maxValue={maxValue}
                error={error}
            />
            <div className={s.buttons}>
                <Button
                    name={"INC"}
                    onClick={onIncCounter}
                    disabled={error || counterValue === maxValue}
                />
                <Button
                    name={"RESET"}
                    onClick={onResetCounter}
                    disabled={error || counterValue === startValue}
                />
            </div>
        </div>
    )
}