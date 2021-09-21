import React from "react";
import s from "./Settings.module.css";
import {Button} from "../Button/Button";

type PropsType = {
    maxValue: number
    startValue: number
    error: boolean
    disabled: boolean
    onMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onStartChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSetValue: () => void
}

export const Settings: React.FC<PropsType> = (props) => {

    const {
        maxValue,
        startValue,
        error,
        disabled,
        onSetValue,
        onMaxChange,
        onStartChange,
    } = props

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