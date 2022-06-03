import { useState } from "react";
import "./style.css";

function getInitialState() {
  return {
    title: "",
    text: "",
    id: Math.ceil(Math.random() * 10000),
  };
}

export function NewPost({ onCreate = console.log }) {
  const [state, setState] = useState(() => getInitialState());

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();

        onCreate(state);

        setState(getInitialState());
      }}
    >
      <div className="input-container">
        <input
          className="input-element"
          placeholder="title"
          type="text"
          value={state.title}
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
          }}
        />
      </div>
      <div className="input-container">
        <textarea
          className="input-element"
          value={state.text}
          placeholder="text"
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              text: e.target.value,
            }));
          }}
        />
      </div>
      <div className="input-container">
        <button className="input-element" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
