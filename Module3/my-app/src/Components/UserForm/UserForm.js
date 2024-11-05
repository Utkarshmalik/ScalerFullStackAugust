import { useState } from "react";
import { useNavigate  } from "react-router-dom";

function Form(props){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);

    const navigate = useNavigate();

    function onNameChange(e){
        const nameSearchValue = e.target.value;
        setName(nameSearchValue);
    }


    function onEmailChange(e){
        const emailSearchValue = e.target.value;
        setEmail(emailSearchValue);
    }

    function onGenderChange(e){
        setGender(e.target.value);
    }

    function onAgeChange(e){
        setAge(e.target.value);
    }

    function handleSubmit(e){

        e.preventDefault();
        
        console.log(`Form is submitted with name:${name} email:${email}`);

        const newUser = {
            firstName:name,
            email:email,
            gender:gender,
            age:age,
            image:"https://dummyjson.com/icon/emilys/128",
            id:Math.random().toString()
        }
    
        props.onFormSubmit(newUser);


         navigate("/");

    }


    return <div>

        <form onSubmit={handleSubmit}>
            
            <div>
               <label htmlFor="name"> Name </label>
               <input onChange={onNameChange} type="text" id="name" value={name} />
            </div>

            <div>
               <label htmlFor="gender"> Gender </label>
               <input onChange={onGenderChange} type="text" id="gender" value={gender} />
            </div>

            <div>
               <label htmlFor="age"> Age </label>
               <input onChange={onAgeChange} type="number" id="number" value={age} />
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