import React from 'react';
import TodosList from './todos-list'

const todos=[
    {
        task: 'make react tuto',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        //let test = 'App';
        //console.log("Hi there from "+test);
        //  alert("Hi "+test);
        return <div>
                <h1>React to do s!</h1>
                <TodosList todos={this.state.todos}/>
            </div>

    }
}
