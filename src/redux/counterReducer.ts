type CounterStateType = typeof initialState

type incCounterAT = ReturnType<typeof incCounterAC>
type resetCounterAT = ReturnType<typeof resetCounterAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setStartValueAT = ReturnType<typeof setStartValueAC>
type setCounterValueAT = ReturnType<typeof setCounterValueAC>
type setErrorAT = ReturnType<typeof setErrorAC>

type ActionsType =
    incCounterAT |
    resetCounterAT |
    setMaxValueAT |
    setStartValueAT |
    setCounterValueAT |
    setErrorAT

enum Actions {
    INC_COUNTER = 'COUNTER/INC_COUNTER',
    RESET_COUNTER = 'COUNTER/RESET_COUNTER',
    SET_MAX_VALUE = 'SETTINGS/SET_MAX_VALUE',
    SET_START_VALUE = 'SETTINGS/SET_START_VALUE',
    SET_COUNTER_VALUE = 'SETTINGS/SET_COUNTER_VALUE',
    SET_ERROR = 'SETTINGS/SET_ERROR',
}

const initialState = {
    counterValue: Number(localStorage.getItem('startValue')),
    maxValue: Number(localStorage.getItem('maxValue')),
    startValue: Number(localStorage.getItem('startValue')),
    error: false,
}


export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case Actions.INC_COUNTER:
            return {...state, counterValue: state.counterValue + 1}

        case Actions.RESET_COUNTER:
            return {...state, counterValue: state.startValue}

        case Actions.SET_MAX_VALUE:
            return {...state, maxValue: action.value}

        case Actions.SET_START_VALUE:
            return {...state, startValue: action.value}

        case Actions.SET_COUNTER_VALUE:
            return {...state, counterValue: action.value}

        case Actions.SET_ERROR:
            return {...state, error: action.isError}

        default:
            return state
    }
}

export const incCounterAC = () => {
    return {
        type: Actions.INC_COUNTER,
    } as const
}
export const resetCounterAC = () => {
    return {
        type: Actions.RESET_COUNTER,
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: Actions.SET_MAX_VALUE,
        value: value,
    } as const
}
export const setStartValueAC = (value: number) => {
    return {
        type: Actions.SET_START_VALUE,
        value: value,
    } as const
}
export const setCounterValueAC = (value: number) => {
    return {
        type: Actions.SET_COUNTER_VALUE,
        value: value,
    } as const
}
export const setErrorAC = (isError: boolean) => {
    return {
        type: Actions.SET_ERROR,
        isError: isError,
    } as const
}
