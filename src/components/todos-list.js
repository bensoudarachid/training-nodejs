import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-header'

export default class ToDosList extends React.Component {

    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
//        let test = 'App';
        console.log("Hi there from List. Props: "+this.props);
        return <table>
            <TodosListHeader/>
        </table>
    }
}