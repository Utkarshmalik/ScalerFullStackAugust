import Button from "react-bootstrap/esm/Button";
import "./User.css";
import { Link } from "react-router-dom";



function User(props){

    const userData = props.userData;

    return  <Link to={`/users/${userData.id}`}>
    <div className="user">
            <img src={userData.image} />
            <p>  User {userData.id} </p>
            <p> Name: {userData.firstName} </p>
            <p > Gender {userData.gender} </p>
            <p> Age: {userData.age}  </p>
            <p > Email: {userData.email} </p>
            <Button onClick={(e)=> props.onDeleteUser(e,userData.id)}
              variant="danger">Delete</Button>{' '}
        </div>
        </Link> 
}

export default User;


//use a JS within JSX  : {}

