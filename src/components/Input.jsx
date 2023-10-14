import React from "react";

const Input = ({addTask , setInput, task, input}) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        onKeyUpCapture={addTask}
        placeholder="Добавить задачу"
        value={input}
      />
      <button
        className="send"
        onClick={(e) => {
          if (input) {
            task(e);
            setInput("");
          }
        }}
      >
        Отправить
      </button>
    </>
  );
};

export default Input;
