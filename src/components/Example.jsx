import React from "react";
import Star from "./Star";
export default function Example(){
    const [formData, setData]= React.useState(
        {firstName:"",lastName:"",email:""}
    );

    console.log(formData);
    
    function handleChange(event){
        setData(prevdata =>{
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            };
        });

    }
    
    
    return (<form>
              <input
                type="text"
                placeholder="First name"
                onChange={handleChange}
                name="firstName"
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={handleChange}
                name = "lastName"
              />
              <input
                type="text"
                placeholder="email"
                onChange={handleChange}
                name = "email"
              />
    
              
            </form>);
}
//last topic on 8:07
//todo state --derived state and passing funciton to make the task complete note on that!!!
