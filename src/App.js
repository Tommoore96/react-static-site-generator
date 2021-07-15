import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(2);
    return (<div>
        <h1>hello</h1>
        {count}
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>)
}

export default App;