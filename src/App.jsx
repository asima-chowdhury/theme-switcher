import { useState } from "react";
import MyComponent from "./components/MyComponent.jsx";
import { MyContext } from "./context/MyContext.js";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
