import React from 'react';
import {Button, FormGroup, FormControl, Col, Form, Checkbox} from 'react-bootstrap';

class SignupForm extends React.Component {
    render(){
        return (
        <div>
        <p>
          <Form horizontal>
            <FormGroup controlId="FormGroupEmail">
                <FormControl style={{ width: 500, backgroundColor:"Gainsboro" }} type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup controlId="FormGroupPassword">
                <FormControl style={{ width: 500, backgroundColor:"Gainsboro" }} type="password" placeholder="Password"/>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Checkbox style={{color:"SpringGreen"}}> Remember me </Checkbox>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="Submit">
                        Sign up
                    </Button>
                </Col>
            </FormGroup>
          </Form>
          </p>
        </div>
        );
    }
}

export default SignupForm;