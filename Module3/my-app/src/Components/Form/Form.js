import { useState } from "react";

function Form(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    function onNameChange(e){
        const nameSearchValue = e.target.value;
        setName(nameSearchValue);
    }


    function onEmailChange(e){
        const emailSearchValue = e.target.value;
        setEmail(emailSearchValue);
    }

    function handleSubmit(e){

        e.preventDefault();
        console.log(`Form is submitted with name:${name} email:${email}`);

        setTimeout(()=>{
            setName("");
            setEmail("");
        },2000);
    }


    return <div>

        <form onSubmit={handleSubmit}>
            
            <div>
               <label htmlFor="name"> Name </label>
               <input onChange={onNameChange} type="text" id="name" value={name} />
            </div>

            <div>
               <label htmlFor="email"> Email </label>
               <input onChange={onEmailChange} type="email" id="email" value={email} />
            </div>

            <button type="submit"> Submit </button>

        </form>

       

    </div>


}

export default Form;