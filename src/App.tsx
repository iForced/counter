import React, {useState} from 'react';
import s from './App.module.css';
import {Screen} from "./components/Screen/Screen";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    const MAX_VALUE: number = 5
    const START_VALUE: number = 0

    let [counter, setCounter] = useState<number>(0)

    return (
        <div className={s.app}>
            <Counter
                counter={counter}
                setCounter={setCounter}
                maxValue={MAX_VALUE}
                startValue={START_VALUE}
            />
            <Settings />
        </div>
    );
}

export default App;
