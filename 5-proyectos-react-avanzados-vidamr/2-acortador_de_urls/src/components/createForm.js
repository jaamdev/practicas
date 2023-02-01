import { useState } from "react";
import style from "./createForm.module.css";

export default function CreateForm({ dispatch }) {
  const [url, setUrl] = useState("");

  function handleOnChange(e) {
    const value = e.target.value;
    setUrl(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "ADD", data: url });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        onChange={handleOnChange}
        value={url}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
