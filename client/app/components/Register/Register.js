import React from 'react'
import {Button, Header, Image, Modal, Menu, Form, Tab, Checkbox, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import ReactPhoneInput from 'react-phone-input-2';

//export default Register;
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]



const formStudent = () => (
  <Form className="form_register_student">
    <Form.Field>
      <Input icon='user' iconPosition='left' placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <Input icon='envelope' iconPosition='left' placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <Input icon='key' iconPosition='left' placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <ReactPhoneInput defaultCountry={'id'} onlyCountries={['id', 'my']} onChange={handleOnChange.bind(this)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' className='term' />
    </Form.Field>
    <Button basic color='blue' type='submit' floated={'left'}>Create account</Button>
    
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
          <Modal.Header>Daftar</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {/* <Header>Default Profile Image</Header> */}
              <div className="ui two item menu">
                <a className="item type_of_reg active" onClick={handleClick.bind(this)}>As Student</a>
                <a className="item type_of_reg" onClick={handleClick.bind(this)}>As Teacher</a>
              </div>
              
              <Grid columns={8}>
              {formStudent()}
              </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal> 
      </div>
    )
  }
}