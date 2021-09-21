import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {setCounterValueAC, setErrorAC, setMaxValueAC, setStartValueAC} from "../../redux/counterReducer";
import {connect} from "react-redux";
import {Settings} from "./Settings";

type mapStateToPropsType = {
    maxValue: number
    startValue: number
    error: boolean
}
type mapDispatchToPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCounterValue: (value: number) => void
    setError: (value: boolean) => void
}
export type SettingsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        maxValue: state.counter.maxValue,
        startValue: state.counter.startValue,
        error: state.counter.error,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setMaxValue: (value: number) => {
            dispatch(setMaxValueAC(value))
        },
        setStartValue: (value: number) => {
            dispatch(setStartValueAC(value))
        },
        setCounterValue: (value: number) => {
            dispatch(setCounterValueAC(value))
        },
        setError: (isError: boolean) => {
            dispatch(setErrorAC(isError))
        },
    }
}

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)