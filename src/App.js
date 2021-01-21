import React, { Component } from 'react';
import Ux from '../src/hoc/Ux'
import './App.css';
import {Container,Row,Card,Heading,Para,Img1,Img2} from './Styled_comp';
import Images from './Images';

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

            <Card>
                <div>
                    <Img2 src={Images.step1} alt=""/>
                    <Img1 src={Images.Frame238} alt=""/>
                </div>
                
                <Para><strong>Lorem ipsum</strong> dolor sit amet pudiandae, dolores natus? voluptatibus temporibus a, id maxime quia pariatur, ullam iste.</Para>
            </Card>
            <Card>
                <div >
                    <Img2 src={Images.step2} alt="" />
                    <Img1 src={Images.Frame27} alt="" />
                </div>
                <Para><strong>Lorem ipsum</strong> dolor sit amet pudiandae, dolores natus? voluptatibus temporibus a, id maxime quia pariatur, ullam iste.</Para>
            </Card>
            <Card>
                <div >
                    <Img2 src={Images.step3} alt="" />
                    <Img1 src={Images.Frame28} alt="" />
                </div>
                <Para><strong>Lorem ipsum</strong> dolor sit amet pudiandae, dolores natus? voluptatibus temporibus a, id maxime quia pariatur, ullam iste.</Para>
                
            </Card>
        </Row>
    </Container>
      </div>
      </Ux>
    );
  }
}

export default App;
