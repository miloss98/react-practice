import { useState, React} from "react"; 
import "../styles/colorgenerator.css";

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`
    const [alert, setAlert] = useState(false);
  
    return (
        <article className={`color ${index > 10 && 'color-light'}`}  style={{ backgroundColor: `rgb(${bcg})` }}>
            <h1> {weight}% </h1>
            <h4> {hexValue} </h4>
        </article>
    )
}

export default SingleColor