import "./Block.css";
import {useState} from "react";

function colorFunc(isClicked) {
    if (isClicked) {
        return "blue";
    }
}

export default function Block(props) {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClicks = () => {
        setIsClicked(true);
    }

    const setColor = (predicate) => {
        if (predicate) {
            return props.currentColor;
        } else {
            return "beige";
        }
    }

    return (
    <div 
        className="Block" style= {{width: props.width, height: props.height, backgroundColor: setColor(isClicked)}}
        onMouseEnter={handleClicks}
    ></div>
    );
}