import { useState } from "react";
import "./main.css";

function Main() {
  const [colors, setColors] = useState(['grey', 'grey', 'grey', 'grey', 'grey']);
  const handleClick = (index, value) => {
    switch (index) {
      case 0:
        setColors([value, 'grey', 'grey', 'grey', 'grey']);
        break;

      case 1:
        setColors([value, value, 'grey', 'grey', 'grey']);
        break;

      case 2:
        setColors([value, value, value, 'grey', 'grey']);
        break;

      case 3:
        setColors([value, value, value, value, 'grey']);
        break;

      case 4:
        setColors([value, value, value, value, value]);
        break;
      default:
        setColors([value, 'grey', 'grey', 'grey', 'grey']);
        break;
    }
  }
  return (
    <div className="btnwrapper">
      <div className="btndiv">
      <p>Extremely Bad</p>
      <button className="btn" id="btn1"
        style={{ background: colors[0] }}
        onClick={() => handleClick(0, 'red')}>

      </button>
      </div>
      <div className="btndiv">
      <p>Bad</p>
      <button id="btn2"
        style={{ background: colors[1] }}
        onClick={() => handleClick(1, 'orange')}>

      </button>
      </div>
      <div className="btndiv">
      <p>Neutral</p>
      <button id="btn3"
        style={{ background: colors[2] }}
        onClick={() => handleClick(2, 'yellow')}>

      </button>
      </div>
      <div className="btndiv">
      <p>Good</p>
      <button id="btn4"
        style={{ background: colors[3] }}
        onClick={() => handleClick(3, 'palegreen')}>

      </button>
      </div>
      <div className="btndiv">
      <p>Extremely Good</p>
      <button className="btn" id="btn5"
        style={{ background: colors[4] }}
        onClick={() => handleClick(4, 'green')}>

      </button>
      </div>
    </div>
  )
}

export default Main;