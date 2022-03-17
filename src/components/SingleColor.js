import { useState, useEffect, React} from "react"; 
import "../styles/colorgenerator.css";

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`
    const [alert, setAlert] = useState(false);
    
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false);
        },2000)
    },[alert])

    return (
        <article onClick={()=>{
           setAlert(true); 
           navigator.clipboard.writeText(hexValue);
        }} className={`color ${index > 10 && 'color-light'}`}  style={{ backgroundColor: `rgb(${bcg})` }}>
            <h1> {weight}% </h1>
            <h4> {hexValue} </h4>
            {alert && <p> copied to clipboard! </p>}
        </article>
    )
}

export default SingleColor