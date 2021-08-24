import React, {useState} from "react";
import s from "./Settings.module.css";
import {Button} from "../Button/Button";
import {log} from "util";

type PropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCounterValue: (value: number) => void
}

export const Settings: React.FC<PropsType> = (
    {
        maxValue,
        startValue,
        setMaxValue,
        setStartValue,
        setCounterValue
    }
) => {

    const [disabled, setDisabled] = useState<boolean>(true)
    // if (maxValue !== Number(localStorage.getItem('maxValue')) &&
    //     startValue !== Number(localStorage.getItem('startValue'))) {
    //     setDisabled(false)
    // }

    // let isDisabled =
    //     maxValue === Number(localStorage.getItem('maxValue'))
    //     && startValue === Number(localStorage.getItem('startValue'))

    const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        setDisabled(false)
    }
    const onStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
        setCounterValue(Number(e.currentTarget.value))
        setDisabled(false)
    }

    const onClickHandler = () => {
        localStorage.setItem('startValue', String(startValue))
        localStorage.setItem('maxValue', String(maxValue))
        setDisabled(true)
    }


    return (
        <div className={s.settings}>
            <div className={s.parameters}>
                <div className={s.max_field}>
                    <span>Max value</span>
                    <input
                        type="number"
                        value={maxValue}
                        onChange={onMaxChange}
                    />
                </div>
                <div className={s.start_field}>
                    <span>Start value</span>
                    <input
                        type="number"
                        value={startValue}
                        onChange={onStartChange}
                    />
                </div>
            </div>
            <div className={s.buttons}>
                <Button
                    name={"SET"}
                    disabled={disabled}
                    onClick={onClickHandler}/>
            </div>
        </div>
    )
}