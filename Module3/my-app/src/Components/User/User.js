import Button from "react-bootstrap/esm/Button";
import "./User.css";



function User(props){

    function onDeleteButtonClick(e,id){
        console.log("Delete Button Clicked for userId: ",id);
    }
  

    const userData = props.userData;

    return   <div className="user">
            <img src={userData.image} />
            <p>  User {userData.id} </p>
            <p> Name: {userData.firstName} </p>
            <p > Gender {userData.gender} </p>
            <p> Age: {userData.age}  </p>
            <p > Email: {userData.email} </p>
            <Button onClick={(e)=> onDeleteButtonClick(e,userData.id)}  variant="danger">Delete</Button>{' '}
        </div>
}

export default User;


//use a JS within JSX  : {}

