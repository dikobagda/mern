import React from 'react'
import {Segment, Button, Header, Divider, Image, Modal, Menu, Form, Tab, Checkbox, Input, Dropdown, Transition} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
//import { OldSocialLogin as SocialLogin } from 'react-social-login'
import FbLogin from './FacebookLoginButton';
import GLogin from './GoogleLoginButton';
import RegularForm from './FormRegister';


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
                <Grid columns={3}>
                  <Grid.Column className="col_regular_form">
                    <RegularForm />
                  </Grid.Column>

                  <Grid.Column className="col_divider">
                    <Divider vertical>Or</Divider>
                  </Grid.Column>

                  <Grid.Column className="col_social_form">
                    <FbLogin />
                    <GLogin />
                  </Grid.Column>
                </Grid>
              </Modal.Description>
            </Modal.Content>
          </Modal> 
      </div>
    )
  }
}