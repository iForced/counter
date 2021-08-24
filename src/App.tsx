import React, {useState} from 'react';
import s from './App.module.css';
import {Screen} from "./components/Screen/Screen";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    // const START_VALUE: number = 0
    // const MAX_VALUE: number = 5

    const [MAX_VALUE, setMAX_VALUE] = useState<number>(Number(localStorage.getItem('maxValue')))
    const [START_VALUE, setSTART_VALUE] = useState<number>(Number(localStorage.getItem('startValue')))
    const [counter, setCounter] = useState<number>(START_VALUE)

    return (
        <div className={s.app}>
            <Settings
                maxValue={MAX_VALUE}
                startValue={START_VALUE}
                setMaxValue={setMAX_VALUE}
                setStartValue={setSTART_VALUE}
                setCounterValue={setCounter}
            />
            <Counter
                counterValue={counter}
                setCounter={setCounter}
                maxValue={MAX_VALUE}
                startValue={START_VALUE}
            />
        </div>
    );
}

export default App;
