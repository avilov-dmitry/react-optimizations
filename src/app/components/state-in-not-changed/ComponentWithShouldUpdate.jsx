import React from "react";

export class ComponentWithShouldUpdateStateNotChanged extends React.Component {
    state = {
        count: 0
    }
    componentDidUpdate() {
        console.log('ComponentWithShouldUpdateStateNotChanged componentDidUpdate');
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count === nextState.count) {
            return false
        }
        return true
    }
    render() {
        console.log('ComponentWithShouldUpdateStateNotChanged render');
        return (
            <div className="App__card">
                <div>Component With Should Update</div>
                <div>State and props are not changed</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.setState({count: 1})}>Click Me</button>
            </div>
        );
    }
}