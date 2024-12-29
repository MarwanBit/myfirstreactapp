import './InputBox.css';

export default function InputBox(props) {
    const updateColor= (e) => {
       props.setCurrentColor(e.target.value);
    }

    const clearBoard = (e) => {
        return null;
    }

    return (
        <div className="InputBox">
            <div className="slider"> 
                <p>Select Size:</p>           
                <input type="range" min="16" max="80"></input>
            </div>
            <div className="color-section">
                <p>Select Color:</p>
                <select id="color-select" name="color-select" onChange={updateColor}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="random">Random</option>
                </select>
            </div>
            <div className="sliding">
                <button className="clear-button" onClick={clearBoard}>Clear</button>
            </div>


        </div>
    );
}