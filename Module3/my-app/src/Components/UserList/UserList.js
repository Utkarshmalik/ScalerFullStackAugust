import User from "../User/User";
import usersData from "../../data/users.json";
import "./UserList.css";
import Navbar from "../Navbar/Navbar";


function UserList(){

    const users = usersData.users;

    return <div className="userList" >

        
        <h2> Users </h2>

        <div className="users" >

            {
                    users.map((user)=>{
                        return <User key={user.id} userData={user}   />
                    })
                }

        </div>
      

    </div>

}

export default UserList;






//How to add CSS within JSX : 

//1 . Inline Stlying  : pass a style attribue 
// which contains a JS object of all the styles to be applied on that element   
// style={{color:"red",backgroundColor:"black",
//     border:"3px solid red", padding:"5px"}}
//2. External Styling 