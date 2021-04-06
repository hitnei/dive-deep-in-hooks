import React, { useEffect, useState } from "react";

function Syntax() {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  useEffect(() => {
    console.log("1");
    return () => {
      console.log("2");
    };
  }, [checkBoxValue]);
  return <div></div>;
}

export default Syntax;
