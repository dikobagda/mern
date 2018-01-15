import React from 'react'
import {Button, Header, Image, Modal, Menu, Form, Tab, Checkbox, Input, Dropdown, Transition} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import ReactPhoneInput from 'react-phone-input-2';

//export default Register;

const regOptions = [
  { key: 't', text: 'Teacher', value: 'teacher', icon: 'travel' },
  { key: 's', text: 'Student', value: 'student', icon: 'student' },
]

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male', icon: 'male' },
  { key: 'f', text: 'Female', value: 'female', icon: 'female' },
]


const formStudent = () => (
  <Form className="form_register_student">
    <Form.Field>
      <Dropdown fluid selection options={regOptions} placeholder='Select type of registration'  />
    </Form.Field>
    <Form.Field>
      <Dropdown fluid selection options={genderOptions} placeholder='Select Gender'  />
    </Form.Field>
    <Form.Field>
      <Input icon='user' iconPosition='left' placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <Input icon='envelope' iconPosition='left' placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <Input icon='key' iconPosition='left' type='password' placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Input icon='phone' type='number' iconPosition='left' placeholder='Phone' />
    </Form.Field>
    <Form.Field align='left'>
      <Checkbox label='I agree to the Terms and Conditions' className='term' />
    </Form.Field>
    <Button basic color='blue' type='submit' floated={'left'}>Create an account</Button>
  </Form>
)

let handleClick = (e) => {
  alert(e.target.className)
}

let handleOnChange = (value) => {
  console.log('test');
}

export default class Register extends React.Component {
  constructor(props) {
    super()
    this.state={name: props.name, phone: null}
  }

  render() {
    return (
      <div>
        
          <Modal trigger={<Menu.Item name={this.state.name} as={Link} to='#' />}>
            <Modal.Header>Register</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                {/* <Header>Default Profile Image</Header> */}
                {/* <div className="ui two item menu">
                  <a className="item type_of_reg active" onClick={handleClick.bind(this)}>As Student</a>
                  <a className="item type_of_reg" onClick={handleClick.bind(this)}>As Teacher</a>
                </div>
                */}
                <Grid centered>
                  {formStudent()}
                </Grid>
              </Modal.Description>
            </Modal.Content>
          </Modal> 
        
      </div>
    )
  }
}