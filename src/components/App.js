import React from 'react';
import {Route, Switch} from 'react-router-dom';

import TaskForm from './TaskForm';

import SignupPage from './SignupPage';
import './index.css';
import NavigationBar from './NavigationBar';

class App extends React.Component {
    render(){
        return(
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path ='/' render={(props) => (<TaskForm {...props}
                                                    store={this.props.store}
                                                    todoList={this.props.store.getState()}/>)}/>
                <Route path='/signup' component={SignupPage} />
            </Switch>
            {this.props.children}
        </div>
        )
    }
}

export default App