import React, {Component} from 'react'
import '../../styles/style.css'
import { Dropdown, Input, Button, Segment, Grid } from 'semantic-ui-react'
import SegmentProduct from './SegmentProduct'

//let countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }];
let programOptions = [
      {
        text: 'Recitation',
        value: 'recitation',
        image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/jenny.jpg' },
      },
      {
        text: 'Tajweed',
        value: 'tajweed',
        image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/elliot.jpg' },
      },
      {
        text: 'Arabic',
        value: 'arabic',
        image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg' },
      },
      {
        text: 'Hafidz',
        value: 'hafidz',
        image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/christian.jpg' },
      }
    ]

const DropdownProgramOptions = () => (
    <div>
        <Dropdown className="center" action='Search' id="searchbox" placeholder='What you want to learn' search selection options={programOptions} />
        <Button color='teal' className="btn-find">Find</Button>
    </div>
);
  
class Home extends React.Component {
    
    constructor(args) {
      super(args);
    }
    
    render() {
      return (
        <div>
          <div id="welcome">
                <div id="welcome_title">
                    <h1><strong>Learn Quran faster with <br /> the best one-on-one online tutors</strong></h1>
                </div>
                <div id="welcome_options">
                    <DropdownProgramOptions />    
                </div>
                
          </div>
          <SegmentProduct />
        </div>
      )
    }
  }
export default Home;
