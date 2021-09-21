import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Counter} from "./Counter";
import {incCounterAC, resetCounterAC} from "../../redux/counterReducer";

type mapStateToPropsType = {
    counterValue: number,
    maxValue: number,
    startValue: number,
    error: boolean,
}
type mapDispatchToPropsType = {
    incCounter: () => void
    resetCounter: () => void
}
export type CounterPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        counterValue: state.counter.counterValue,
        maxValue: state.counter.maxValue,
        startValue: state.counter.startValue,
        error: state.counter.error,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        incCounter: () => {
            dispatch(incCounterAC())
        },
        resetCounter: () => {
            dispatch(resetCounterAC())
        }
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)