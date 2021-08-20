import React, {useState} from 'react';
import s from './App.module.css';
import {Screen} from "./components/Screen/Screen";
import {Button} from "./components/Button/Button";

function App() {
    const MAX_VALUE: number = 5
    const START_VALUE: number = 0

    let [counter, setCounter] = useState<number>(0)

    return (
        <div className={s.app}>
            <Screen counterValue={counter}/>
            <div className={s.buttons}>
                <Button
                    name={"INC"}
                    setCounterValue={setCounter}
                    counterValue={counter}
                    disabled={counter === MAX_VALUE}
                    maxValue={MAX_VALUE}
                    startValue={START_VALUE}
                />
                <Button
                    name={"RESET"}
                    setCounterValue={setCounter}
                    counterValue={counter}
                    disabled={counter === START_VALUE}
                    maxValue={MAX_VALUE}
                    startValue={START_VALUE}
                />
            </div>
        </div>
    );
}

export default App;
