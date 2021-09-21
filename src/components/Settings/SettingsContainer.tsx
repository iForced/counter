import React, {useState} from "react";
import {Dispatch} from "redux";
import {setCounterValueAC, setErrorAC, setMaxValueAC, setStartValueAC} from "../../redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {Settings} from "./Settings";
import {selectAllState} from "../../redux/selectors";

export const SettingsContainer = () => {

    const dispatch = useDispatch<Dispatch>()
    const {maxValue, startValue, error} = useSelector(selectAllState)
    const [disabled, setDisabled] = useState<boolean>(true)

    const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        if (inputValue >= 0) {
            dispatch(setMaxValueAC(inputValue))
            setDisabled(false)
            dispatch(setErrorAC(false))
        } else {
            dispatch(setErrorAC(true))
            setDisabled(true)
        }
    }
    const onStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.currentTarget.value)
        if (inputValue >= 0) {
            dispatch(setStartValueAC(inputValue))
            dispatch(setCounterValueAC(inputValue))
            setDisabled(false)
            dispatch(setErrorAC(false))
        } else {
            dispatch(setErrorAC(true))
            setDisabled(true)
        }
    }
    const onSetValue = () => {
        if (startValue < maxValue) {
            localStorage.setItem('startValue', String(startValue))
            localStorage.setItem('maxValue', String(maxValue))
            setDisabled(true)
        } else {
            dispatch(setErrorAC(true))
        }
    }
    return (
        <>
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                error={error}
                disabled={disabled}
                onMaxChange={onMaxChange}
                onStartChange={onStartChange}
                onSetValue={onSetValue}
            />
        </>
    )
}