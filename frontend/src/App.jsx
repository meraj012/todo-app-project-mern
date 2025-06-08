import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-violet-400 text-5xl text-red-100">Hello world</h1>
    </>
  );
}

export default App;
