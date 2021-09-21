type CounterStateType = typeof initialState
type incCounterAT = ReturnType<typeof incCounterAC>
type resetCounterAT = ReturnType<typeof resetCounterAC>
type ActionsType = incCounterAT | resetCounterAT

enum Actions {
    INC_COUNTER = 'COUNTER/INC_COUNTER',
    RESET_COUNTER = 'COUNTER/RESET_COUNTER'
}

const initialState = {
    counterValue: 0,
    maxValue: 5,
    startValue: 0,
    error: false,
}


export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case Actions.INC_COUNTER:
            return {...state, counterValue: state.counterValue + 1}

        case Actions.RESET_COUNTER:
            return {...state, counterValue: 0}

        default:
            return state
    }
}

export const incCounterAC = () => {
    return {
        type: Actions.INC_COUNTER,
    }
}
export const resetCounterAC = () => {
    return {
        type: Actions.RESET_COUNTER,
    }
}