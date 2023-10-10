import React from "react";
import Star from "./Star";
export default function Example(){
    const [firstName, setName]= React.useState("");
    const [lastName, setLastName] = React.useState("");

    

    console.log(firstName);
    console.log(lastName);

    function handleChange(event){
    console.log(event);
        setName(event.target.value);
        setLastName(event.target.vaue);
    }
    
    
    return (<form>
              <input
                type="text"
                placeholder="First name"
                onChange={handleChange}
              />
            </form>);
}
//last topic on 7:28
//todo state --derived state and passing funciton to make the task complete note on that!!!
