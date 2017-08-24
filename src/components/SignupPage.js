import React from 'react';
import SignupForm from './SignupForm'

class SignupPage extends React.Component {

    render(){
        return (
          <div className="row">
          <div className="title"> Sign up </div>
            <div className="col-md-4 col-md-offset-4">
                <SignupForm />
            </div>
          </div>

        );
    }
}

export default SignupPage;