import React from "react";
import {Screen} from "../Screen/Screen";
import s from "../../App.module.css";
import {Button} from "../Button/Button";

type PropsType = {
    counter: number
    setCounter: (value: number) => void
    maxValue: number
    startValue: number
}

export const Counter: React.FC<PropsType> = (
    {
        counter,
        setCounter,
        maxValue,
        startValue
    }
) => {
    return (
        <div className={s.counter}>
            <Screen counterValue={counter}/>
            <div className={s.buttons}>
                <Button
                    name={"INC"}
                    setCounterValue={setCounter}
                    counterValue={counter}
                    disabled={counter === maxValue}
                    maxValue={maxValue}
                    startValue={startValue}
                />
                <Button
                    name={"RESET"}
                    setCounterValue={setCounter}
                    counterValue={counter}
                    disabled={counter === startValue}
                    maxValue={maxValue}
                    startValue={startValue}
                />
            </div>
        </div>
    )
}