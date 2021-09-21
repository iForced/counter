import React from 'react';
import s from './App.module.css';
import {SettingsContainer} from "./components/Settings/SettingsContainer";
import {CounterContainer} from "./components/Counter/CounterContainer";

function App() {

    return (
        <div className={s.app}>
            <SettingsContainer />
            <CounterContainer />
        </div>
    );
}

export default App;
