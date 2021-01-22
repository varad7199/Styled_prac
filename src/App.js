import React, { Component } from 'react';
import Ux from '../src/hoc/Ux'
import './App.css';
import {Container,Row,Heading} from './Styled_comp';
import Images from './Images';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <Ux>
      <div className="App">
      <Container>
        <Heading>
            
               Unlock 21
            
        </Heading>
        <Row>
            <Cards imgren={Images.step1} imgret={Images.Frame238}/>
            <Cards imgren={Images.step2} imgret={Images.Frame27}/>
            <Cards imgren={Images.step3} imgret={Images.Frame28}/>
            
           
        </Row>
    </Container>
      </div>
      </Ux>
    );
  }
}

export default App;
