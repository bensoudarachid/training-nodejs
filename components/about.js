import React from 'react';


export default class AboutComponent extends React.Component {
  render() {
  	// console.log(this.props)
//        <p>A little bit about {this.props.params.name}!!I like {this.props.location.query.food}!</p>

    return (
      <div>
        <p>A little bit about me!!</p>
      </div>
    );
  }
}