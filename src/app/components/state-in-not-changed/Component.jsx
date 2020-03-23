import React from "react";

export class ComponentStateNotChanged extends React.Component {
    state = {
        count: 0
    }
    componentDidUpdate() {
        console.log('ComponentStateNotChanged componentDidUpdate');
    }
    render() {
        console.log('ComponentStateNotChanged render');
        return (
            <div className="App__card">
                <div>Component</div>
                <div>State and props are not changed</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.setState({count: 1})}>Click Me</button>
            </div>
        );
    }
}