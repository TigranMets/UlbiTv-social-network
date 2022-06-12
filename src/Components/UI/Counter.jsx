import React, { useState } from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(5);

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    return (
        <div>
            <h1>likes {likes}</h1>
            <h1>{value}</h1>
            <input type='text' value={value} onChange={event => setValue(event.target.value)} />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;