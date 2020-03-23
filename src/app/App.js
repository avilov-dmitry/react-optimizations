import React from 'react';
import './App.css';
import {FunctionalComponentNotChanged} from "./components/state-in-not-changed/FuntionalComponent";
import {FunctionalMemoComponentNotChanged} from "./components/state-in-not-changed/FuntionalComponentMemo";
import {ComponentStateNotChanged} from "./components/state-in-not-changed/Component";
import {ComponentWithShouldUpdateStateNotChanged} from "./components/state-in-not-changed/ComponentWithShouldUpdate";
import {PureComponentStateNotChanged} from "./components/state-in-not-changed/PureComponent";


// https://habr.com/ru/company/plarium/blog/442116/
class App extends React.Component {
    state = {
        count: 0
    }
    handleOnCLick = () => {
        this.setState({count: 0})
    }
    render() {
        const {count} = this.state;
        const ifFunctional = true;
        return (
            <div className="App">
                {
                    ifFunctional ?
                        <>
                            <FunctionalComponentNotChanged count={count} onClick={this.handleOnCLick} />
                            <FunctionalMemoComponentNotChanged count={count} onClick={this.handleOnCLick} />
                        </> :
                        <>
                            <ComponentStateNotChanged />
                            <ComponentWithShouldUpdateStateNotChanged />
                            <PureComponentStateNotChanged />
                        </>
                }

            </div>
        );
    }
}

export default App;
