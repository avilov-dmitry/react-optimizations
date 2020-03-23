import React from "react";

export const FunctionalMemoComponentNotChanged = React.memo((props) => {
    console.log(`Rendering FunctionalMemoComponentNotChanged: `, props);
    const {count, onClick} = props;
    return (
        <div className="App__card">
            <div>FunctionalMemoComponentNotChanged</div>
            <div>Props are not changed</div>
            <div>{count}</div>
            <button onClick={onClick}>Click Me</button>
        </div>

    )
});