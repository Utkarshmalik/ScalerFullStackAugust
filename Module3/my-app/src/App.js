import Login from "./Components/Login/Login";
import NavbarComp from "./Components/Navbar/Navbar";
import UserList from "./Components/UserList/UserList";
import Counter from "./Components/Counter/Counter";
import Form from "./Components/UserForm/UserForm"
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import usersData from "./data/users.json"
import UserPage from "./Components/UserPage/UserPage";


function App() {

  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const isLoggedIn = JSON.parse(isLoggedInStr);


    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //componentDidMount + componentDidUpdate
    useEffect(async ()=>{
      console.log("I am inside useEffect"); 

       const usersRes = await fetch("https://dummyjson.com/users");
       const usersData = await usersRes.json();

       console.log("Fetched results ",usersData.users);

        setUsers(usersData.users);
       setIsLoading(false);
    },[])



    function onFormSubmit(newUser){

      const updatedUsers = [newUser,...users];

      setUsers(updatedUsers);
    }


  console.log("Rendering App.Js compoent");

  return <div> 

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <UserList isLoading={isLoading} users={users} setUsers={setUsers} /> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/counter" element={ <Counter/> } />
      <Route path="/form" element={ <Form onFormSubmit={onFormSubmit} /> } />
      <Route path="/users/:userId" element={<UserPage/>} />
    </Routes>

    </BrowserRouter>


  </div>
  
}

export default App;






//Conditional Rendering 
// Conditional rendering in React is a powerful way to dynamically display content or components based on specific conditions. By utilizing props and the ternary operator, we can efficiently control what is rendered, making our React applications more dynamic and responsive to different states. This allows us to create a smooth and intuitive user experience, regardless of the specific requirements.





// JSX (JavaScript XML) is a syntax extension for JavaScript, primarily used with React to describe what the user interface should look like. It allows you to write HTML-like code within JavaScript, which React then transforms into regular JavaScript to render elements on the web page.

