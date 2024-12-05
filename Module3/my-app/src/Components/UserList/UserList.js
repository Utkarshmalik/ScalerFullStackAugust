import User from "../User/User";
import "./UserList.css";
import Navbar from "../Navbar/Navbar";
import Button from "react-bootstrap/esm/Button";
import NavbarComp from "../Navbar/Navbar";
import SpinnerComp from "../Common/Spinner/Spinner";


function UserList(props){
    
    const {users, setUsers, isLoading} = props;
    

    function onSortByAge(){

        const sortedUsers = [...users];
        
        sortedUsers.sort(function(user1, user2){
            return user1.age-user2.age}
        );

        setUsers(sortedUsers);
    }

    function onDeleteButtonClick(e,id){
        console.log("Delete Button Clicked for userId: ",id);

        const filteredUsers = users.filter((user)=>{
            return user.id!=id;
        })  

        setUsers(filteredUsers);
    }
  

    return <div className="userList" >
      
      <NavbarComp/>

        
        <h2> Users </h2>


        {
            (isLoading) ?  <SpinnerComp/> :   <div >

        <Button onClick={onSortByAge}> Sort By age  </Button>

        <div className="users">

            {
                    users.map((user)=>{
                        return <User onDeleteUser={onDeleteButtonClick}   key={user.id} userData={user}   />
                    })
            }
        </div>

        </div>
        }

       
      

    </div>

}

export default UserList;






//How to add CSS within JSX : 

//1 . Inline Stlying  : pass a style attribue 
// which contains a JS object of all the styles to be applied on that element   
// style={{color:"red",backgroundColor:"black",
//     border:"3px solid red", padding:"5px"}}
//2. External Styling 