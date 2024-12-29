import './Canvas.css';
import Block from './Block';
import { useEffect } from 'react';


export default function Canvas(props){
    let dimension = 24;
    let array = new Array(dimension*dimension);
    for (let i=0; i < array.length; i++) {
        array[i] = i;
    }

    array = array.map((index) => {
        return (
        <Block key={index} width={String(100.00/dimension) +"%"} height={String(100.00/dimension) + "%"}
                currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}>
            </Block>
            );
    });


    return (
    <div className="container">
        {array}
    </div>
    );
}