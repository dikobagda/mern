import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Segment, Menu, Tab, Grid, Image, Icon, Label} from 'semantic-ui-react'

const menuItem = ['Al-Quran', 'Language', 'Academic', 'Programming', 'Hobbies']


const tab_content1 = () => (
    <Grid celled='internally'>
        <Grid.Row>
            <Grid.Column width={4} className='productGrid'>
                
                <Icon disabled name='html5' size='large' />
                <h3>English Language</h3>
                <small className='small'> 11 Tutors</small>
            </Grid.Column>
            <Grid.Column width={4} className='productGrid'>
                <Icon disabled name='database' size='large' />
                <h3>Arabic Language</h3>
                <small className='small'> 9 Tutors</small>
            </Grid.Column>
            <Grid.Column width={4} className='productGrid'>
                <Icon disabled name='code' size='large' />
                <h3>Mandarin</h3>
                <small className='small'> 15 Tutors</small>
            </Grid.Column>
            <Grid.Column width={4} className='productGrid'>
                <Icon disabled name='css3' size='large' />
                <h3>Japanese</h3>
                <small className='small'> 5 Tutors</small>
            </Grid.Column>
            
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={4} className='productGrid'>
                <Icon disabled name='database' size='large' />
                <h3>Databases</h3>
                <small className='small'> 9 Tutors</small>
            </Grid.Column>
            <Grid.Column width={4} className='productGrid'>
                
                <Icon disabled name='html5' size='large' />
                <h3>HTML</h3>
                <small className='small'> 11 Tutors</small>
            </Grid.Column>
            
            
            <Grid.Column width={4} className='productGrid'>
                <Icon disabled name='css3' size='large' />
                <h3>PHP</h3>
                <small className='small'> 5 Tutors</small>
            </Grid.Column>
            <Grid.Column width={4} className='productGrid'>
                <Icon disabled name='code' size='large' />
                <h3>Java</h3>
                <small className='small'> 15 Tutors</small>
            </Grid.Column>
            
        </Grid.Row>
    </Grid>
)


const panes = [
    { menuItem: menuItem[0], render: () => <Tab.Pane attached={false}>{tab_content1()}</Tab.Pane> },
    { menuItem: menuItem[1], render: () => <Tab.Pane attached={false}>{tab_content1()}</Tab.Pane> },
    { menuItem: menuItem[2], render: () => <Tab.Pane attached={false}>{tab_content1()}</Tab.Pane> },
    { menuItem: menuItem[3], render: () => <Tab.Pane attached={false}>{tab_content1()}</Tab.Pane> },
]


const TabProduct = () => (
    <Tab menu={{ secondary: true, pointing: true, className:'productMenu'}} panes={panes} />
    // <Tab menu={{className: 'productMenu'}} panes={panes} />
)


class SegmentProduct extends React.Component {
    constructor() {
        super();
        this.state = {color: 'grey', activeItem: null}
        this.menuItem = ['language', 'academic', 'programming'];
    }
    
    handleItemClick(e, {name}) { 
        this.setState({ activeItem: name});
    }
    
    render() {
        return (
            <Segment className="segment_product">
                <TabProduct />
            </Segment>
            
        )
    }
}


export default SegmentProduct