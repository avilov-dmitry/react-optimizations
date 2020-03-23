import React from "react";

export const FunctionalComponentNotChanged = (props) => {
    console.log(`Rendering FunctionalComponentNotChanged: `, props);
    const {count, onClick} = props;
    return (
        <div className="App__card">
            <div>Component</div>
            <div>Props are not changed</div>
            <div>{count}</div>
            <button onClick={onClick}>Click Me</button>
        </div>

    )
};