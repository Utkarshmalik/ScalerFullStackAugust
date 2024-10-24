
function User(props){

    console.log(props);

    return   <div>
            <p> I am a User  </p>
            <p> My name is {props.name} </p>
            <p> My age is {props.age}  </p>
        </div>
}

export default User;


//use a JS within JSX  : {}

