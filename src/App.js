import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrate } from 'react-dom';

const App = () => {
    const [count, setCount] = useState(0);
    return (<div>
        <h1>hello</h1>
        {count}
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>)
}

export default App;


// fs.appendFileSync('./index.html', hydrate(<App />,   document.getElementById('root')
// ))