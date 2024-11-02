import { useContext } from 'react';
import { MyContext } from '../context/MyContext.js';

function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>Click me</button>
    </div>
  );
}

export default MyComponent;