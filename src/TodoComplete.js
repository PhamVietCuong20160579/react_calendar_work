import React, { Component } from 'react';
// import './ToDoListItem.css';
// import TodoComplete from "./TodoComplete.js"
// import TodoUncomplete from "./TodoIncomplete.js"

// currently, this.state.list is a copy list from my preriod homework
// when intergrate, its should be replace with array of todo object, with each object defined as a component, or somethings like that.
class TodoComplete extends Component{
	constructor(props){
		super(props);
		// console.log()
		this.state = {list : props.list}
	}

	handleDelete = (index, e) =>{
		this.props.delete(index);
	}

	display = () => {
		let theList = this.state.list.filter((todo)=>{return todo.state === 1;})
		let content = theList.map( todo => (
  			<div class= "ToDoListItem" key={this.state.list.indexOf(todo)}>
	  		  	<h3 className="ToDoListItem-title">{todo.title}</h3>
	  		  	<span class="delete" onClick={(e) => this.handleDelete(this.state.list.indexOf(todo), e)}>X</span>
	  		  	<p className="ToDoListItem-description">{todo.description}</p>
  		  	</div>
  		));
  		return content;
	}

	render(){
		return (
			<div class="todoComplete">
				<h2 class="subtitle">Completed List</h2>
				{this.display()}
			</div>
	)}
}

export default TodoComplete;