import React from 'react'
import {Segment, Button, Header, Divider, Image, Modal, Menu, Form, Tab, Checkbox, Input, Dropdown, Transition} from 'semantic-ui-react'


const regOptions = [
    { key: 't', text: 'Teacher', value: 'teacher', icon: 'travel' },
    { key: 's', text: 'Student', value: 'student', icon: 'student' },
]

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male', icon: 'male' },
    { key: 'f', text: 'Female', value: 'female', icon: 'female' },
]

const onSubmit = () => {
console.log("onsubmit")

}

const RegularForm = () => (
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
            <Button color='blue' onClick={onSubmit} type='submit' className="button-fullwidth">Create an account</Button>
        </Form>
)
    
    

    

export default RegularForm