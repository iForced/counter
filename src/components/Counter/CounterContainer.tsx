import React from "react";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {Counter} from "./Counter";
import {incCounterAC, resetCounterAC} from "../../redux/counterReducer";
import {selectAllState} from "../../redux/selectors";

export const CounterContainer = () => {

    const dispatch = useDispatch<Dispatch>()
    const {counterValue, maxValue, startValue, error} = useSelector(selectAllState)

    const incCounter = () => {
        dispatch(incCounterAC())
    }
    const resetCounter = () => {
        dispatch(resetCounterAC())
    }
    return (
        <>
            <Counter
                counterValue={counterValue}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
                incCounter={incCounter}
                resetCounter={resetCounter}
            />
        </>
    )
}