import { useState } from "react";
import "./App.css";

import ReduxWay from "./redux";
import MobxWay from "./mobx";

const REDUX_MODE = "REDUX_MODE";
const MOBX_MODE = "MOBX_MODE";

export default function App() {
  const [mode, changeMode] = useState(REDUX_MODE);

  const Component = mode === MOBX_MODE ? MobxWay : ReduxWay;

  return (
    <div className="App">
      <div className="App-header">
        <h1 align="center">Redux vs Mobx 2022</h1>
        <div className="mode-controls-container">
          <input
            type="button"
            value="Redux mode"
            onClick={() => changeMode(REDUX_MODE)}
            className={mode === REDUX_MODE ? "active-button" : undefined}
          />
          <input
            type="button"
            value="Mobx mode"
            onClick={() => changeMode(MOBX_MODE)}
            className={mode === MOBX_MODE ? "active-button" : undefined}
          />
        </div>
        <Component />
      </div>
    </div>
  );
}
