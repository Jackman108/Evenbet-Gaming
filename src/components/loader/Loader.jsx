import React, {useState} from "react";
import "./loader.css"
const Loader = ({done}) => {
    const [style, setStyle] = useState({});



    setTimeout(() => {
        const newStyle = {
            opacity: 0.8,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 300);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
            </div>
        </div>
    )
}

export default Loader