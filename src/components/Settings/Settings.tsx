import React, {useState} from "react";
import s from "./Settings.module.css";
import {Button} from "../Button/Button";
import {SettingsPropsType} from "./SettingsContainer";

export const Settings: React.FC<SettingsPropsType> = (
    {
        maxValue,
        startValue,
        setMaxValue,
        setStartValue,
        setCounterValue,
        error,
        setError
    }
) => {

    const [disabled, setDisabled] = useState<boolean>(true)

    const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        if (inputValue >= 0) {
            setMaxValue(inputValue)
            setDisabled(false)
            setError(false)
        } else {
            setError(true)
            setDisabled(true)
        }
    }
    const onStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        if (inputValue >= 0) {
            setStartValue(inputValue)
            setCounterValue(inputValue)
            setDisabled(false)
            setError(false)
        } else {
            setError(true)
            setDisabled(true)
        }
    }
    const onSetValue = () => {
        if (startValue < maxValue) {
            localStorage.setItem('startValue', String(startValue))
            localStorage.setItem('maxValue', String(maxValue))
            setDisabled(true)
        } else {
            setError(true)
        }
    }

    return (
        <div className={s.settings}>
            <h3>Settings</h3>
            <p><i>Set start and max value and press "SET"</i></p>
            <div className={s.parameters}>
                <div className={s.max_field}>
                    <span>Max value</span>
                    <input
                        className={s.field_input + ' ' + (error && s.error)}
                        type="number"
                        value={maxValue}
                        onChange={onMaxChange}
                    />
                </div>
                <div className={s.start_field}>
                    <span>Start value</span>
                    <input
                        className={s.field_input + ' ' + (error && s.error)}
                        type="number"
                        value={startValue}
                        onChange={onStartChange}
                    />
                </div>
            </div>
            <div className={s.buttons}>
                <Button
                    name={"SET"}
                    disabled={error || disabled}
                    onClick={onSetValue}/>
            </div>
        </div>
    )
}