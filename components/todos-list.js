import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-header'
import TodosListItem from './todos-list-item'

export default class ToDosList extends React.Component {

    renderItems() {
        const props = _.omit(this.props, 'todos');
        // console.log('render items baby'+this.props.todos);
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} todo={todo} {...props} />);
//        return 'Hello';
    }

    render() {
//        let test = 'App';
        // console.log("Hi there from List. Props: "+this.props);
        return (
            <table>
                <TodosListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
//{this.renderItems()}