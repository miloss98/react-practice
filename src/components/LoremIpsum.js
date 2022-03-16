import { useState } from 'react'
import { textsData } from "../data/textsData"


const LoremIpsum = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");

  const handleChange = (e) =>{
    e.preventDefault();
    setCount(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0){
      amount = 1;
    }
    if(amount > 9){
      amount = 1
    }
    setData(textsData.slice(0, amount));
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="inputField"> Enter the number of paragraphs you want. </label>
        <br></br>
        <input type="number" id="inputField" name="inputField" value={count} onChange={handleChange}></input>
        <button type="submit" > Generate </button>
      </form>

      <div>
        {data.map((paragraph, index)=>{
          return  <p key={index}>{paragraph} </p>
        })}
      </div>
    </div>
  )
}

export default LoremIpsum
