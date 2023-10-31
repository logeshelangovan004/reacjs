import React, { useState } from "react";

function Logi() {
  const [counts1, setCounts1] = useState(0);
  const [counts2, setCounts2] = useState(100);
  function myfunc() {
    setCounts1(counts1 + 1);
  }
  function myfunc1() {
    setCounts1(counts1 - 1);
  }
  function myfunc2() {
    setCounts2(counts2 + 1);
  }
  function myfunc3() {
    setCounts2(counts2 - 1);
  }
  return (
    <>
      <button onDoubleClick={myfunc}>Increase</button>
      <span>{counts1}</span>
      <button onMouseMove={myfunc1}>Decrease</button>
      <button onMouseOver={myfunc2}>{counts2}</button>
      <button onMouseLeave={myfunc3}>{counts2}</button>
    </>
  );
}

export default Logi;
