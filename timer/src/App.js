import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App () {
    const [timer, setTime] = useState(0);

    setTimeout(() => setTime(timer + 1), 1000 );

    return <div >{timer}</div>
}

export default App;