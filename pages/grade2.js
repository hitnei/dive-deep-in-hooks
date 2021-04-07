import React, { useState, useEffect } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const random_boolean = Math.random() >= 0.5
  const [isLoading, setLoading] = useState(random_boolean === true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <div>
      {isLoading ? "Loading..." :
        <div>
          <input
            onChange={(e) => {
              setInputText(e.target.value);
              setHistoryList([...historyList, e.target.value]);
            }}
            placeholder="Enter some text"
          />
          <p>{inputText}</p>
        </div>
      }
    </div>
  );
};

export default InputElement;
