import { useState } from "react"
import "../styles/forms.css"

const Forms = () => {
 
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firstName: "", email: "",age: ""});

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value});
  }

  const handleSubmit = (e) =>{
   e.preventDefault();
   if(person.firstName && person.email && person.age){
     const newPerson = {...person, id: new Date().getMilliseconds().toString()}
     setPeople([...people, newPerson]);
     setPerson({firstName: "", email: "", age: ""});
     console.log(newPerson.id);
   }
  }

  return (
    
    <article className="container">
       <div>
          <form > 
            <label htmlFor="firstName"> Enter your name here: </label>
            <input type ="text" id="firstName" name="firstName" onChange={handleChange} value={person.firstName}></input> 
            
            <label htmlFor="email"> enter email here: </label>
            <input type="text" id="email" name="email" onChange={handleChange}  value={person.email} /> 

            <label htmlFor="age"> enter your age here: </label>
            <input type="text" id="age" name="age" onChange={handleChange}  value={person.age} /> 

            <button onClick={handleSubmit} type="submit"> Submit </button>
          </form> 
      </div>
      <div>
            {people.map((person)=>{
              const {firstName, email, age, id} = person;
              return (
                <>
                <article className="person-data">
                  <p> id: <span className="info"> {id} </span> </p>
                  <h4> name: <span className="info"> {firstName}</span> </h4>
                  <p> age: <span className="info"> {age} </span> </p> 
                  <p> email: <span className="info"> {email} </span> </p>
                </article>
              </>
              );
            })}
      </div>
    </article>
  )
}

export default Forms