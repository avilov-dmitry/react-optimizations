import React from "react";

export class PureComponentStateNotChanged extends React.PureComponent {
    state = {
        count: 0
    };
    componentDidUpdate() {
        console.log('PureComponentStateNotChanged componentDidUpdate');
    }
    render() {
        console.log('PureComponentStateNotChanged render');
        return (
            <div className="App__card">
                <div>PureComponent</div>
                <div>State and props are not changed</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.setState({count: 1})}>Click Me</button>
            </div>
        );
    }
}