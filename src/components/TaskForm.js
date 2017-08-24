import React from 'react';
import {Button, FormGroup, FormControl, Col, Form, ControlLabel, ListGroup, ListGroupItem} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.css';

let nextTodoId = 0;

//Renders the task and delete button
class Task extends React.Component{

    render(){
        return(
            <ListGroupItem className="task">{this.props.value}
            <Button className="deleteButton" bsStyle="danger" onClick={() => this.props.onClick(this.props.index)}>x</Button></ListGroupItem>
        )
    }
}

//Builds the text box for adding new tasks and the task list
class TaskForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            tasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        //sets the value of the text box
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        //pushes the current text box value to the task list and clears the text box
        event.preventDefault();
        this.props.store.dispatch({
            type: 'ADD_TODO',
            text: this.state.value,
            id: nextTodoId++
        });
        //this.state.tasks.push(this.state.value);
        this.setState({value: ''});
    }

    handleClick(i){
        //When delete button is clicked, the task is removed from the list
        this.props.store.dispatch({
            type: 'REMOVE_TODO',
            id: i
        });
    }

    render(){
        //renders each individual task in the list
        let tasks = '';
        if(this.props.todoList){
            tasks = this.props.todoList.map(todo => {
                return(
                    <div key={todo.id}>
                        <Task
                            value= {todo.text}
                            onClick={(i) => this.handleClick(i)}
                            index= {todo.id}
                        />
                    </div>
                );
            });
        }
        return(
            <div>
                <p>
                    <div className="title">Check List</div>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormGroup bsSize ="large" className="taskForm" >
                            <Col className="formLabel" componentClass={ControlLabel} >New Task:</Col>
                            <FormControl style={{ width: 500, backgroundColor:"Gainsboro" }} placeholder="Add a new Task..." value = {this.state.value} type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <Button className="formSubmit" type="submit" bsStyle="success">Add</Button>
                    </Form>
                    <ListGroup className="taskList">
                        <ReactCSSTransitionGroup
                          transitionName="taskTransition"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}>
                            {tasks}
                        </ReactCSSTransitionGroup>
                    </ListGroup>
                </p>
            </div>
            )
    }
}

export default TaskForm;