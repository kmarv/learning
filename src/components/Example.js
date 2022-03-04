import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(false, 0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((true ,count + 1))}>
        Click me
      </button>
    </div>
  );
}

export default Example;