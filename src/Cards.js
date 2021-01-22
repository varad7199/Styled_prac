import React from 'react';
import {Card,Img1,Img2,Para} from './Styled_comp';
const cards=(props)=>(
    <Card>
    <div>
        <Img2 src={props.imgren} alt=""/>
        <Img1 src={props.imgret} alt=""/>
    </div>
    
    <Para><strong>Lorem ipsum</strong> dolor sit amet pudiandae, dolores natus? voluptatibus temporibus a, id maxime quia pariatur, ullam iste.</Para>
   </Card>
);
export default cards;