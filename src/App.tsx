import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {CounterContainer} from "./components/Counter/CounterContainer";

function App() {

    const [MAX_VALUE, setMAX_VALUE] = useState<number>(Number(localStorage.getItem('maxValue')))
    const [START_VALUE, setSTART_VALUE] = useState<number>(Number(localStorage.getItem('startValue')))
    const [counter, setCounter] = useState<number>(START_VALUE)
    const [error, setError] = useState<boolean>(false)

    return (
        <div className={s.app}>
            <Settings
                maxValue={MAX_VALUE}
                startValue={START_VALUE}
                setMaxValue={setMAX_VALUE}
                setStartValue={setSTART_VALUE}
                setCounterValue={setCounter}
                error={error}
                setError={setError}
            />
            {/*<Counter*/}
            {/*    counterValue={counter}*/}
            {/*    setCounter={setCounter}*/}
            {/*    maxValue={MAX_VALUE}*/}
            {/*    startValue={START_VALUE}*/}
            {/*    error={error}*/}
            {/*/>*/}
            <CounterContainer />
        </div>
    );
}

export default App;
