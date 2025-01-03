import NavbarComp from "./Components/Navbar/Navbar";
import UserList from "./Components/UserList/UserList";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";
import { useFetchData } from "./Hooks/useFetch";
import AuthHoc from "./HOCs/AuthHoc";


const Counter = lazy(()=>import("./Components/Counter/Counter"));
const Form = lazy(()=>import("./Components/UserForm/UserForm"));
const UserPage = lazy(()=>import("./Components/UserPage/UserPage"));
const Login = lazy(()=>import("./Components/Login/Login"));
const TodoList = lazy(()=>import("./Components/TodoList/TodoList"));


function App() {

  const {users, setUsers, onFormSubmit,  exceptionMessage, isLoading} = useFetchData();

  return <div> 

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ 


      <AuthHoc>

      <UserList exceptionMessage={exceptionMessage}
       isLoading={isLoading} 
      users={users} 
      setUsers={setUsers} /> 

      </AuthHoc>

      
      } />
      <Route path="/login" element={
          <Suspense fallback={<div> Loading Login Component .... </div>}>
        <Login/> 
        </Suspense>
        
        } />
      <Route path="/counter" element={ 
        <Suspense fallback={<div> Loading Counter Component .... </div>}>
      <AuthHoc>
      <Counter/>
      </AuthHoc>
      </Suspense>

      
      } />
      <Route path="/form" element={ 
      <Suspense fallback={<div> Loading Form Component .... </div>}>
      <Form onFormSubmit={onFormSubmit} /> 
      </Suspense>
      
      } />
      <Route path="/users/:userId" element={
      
      <Suspense fallback={<div> Loading User Component .... </div>}>
      <UserPage/>
      </Suspense>
      
      } />

           <Route path="/todo" element={
      
      <Suspense fallback={<div> Loading Todo Component .... </div>}>

        <AuthHoc>
          <TodoList/>
        </AuthHoc>
      </Suspense>
      
      } />
    </Routes>

    </BrowserRouter>


  </div>
  
}

export default App;












//Conditional Rendering 
// Conditional rendering in React is a powerful way to dynamically display content or components based on specific conditions. By utilizing props and the ternary operator, we can efficiently control what is rendered, making our React applications more dynamic and responsive to different states. This allows us to create a smooth and intuitive user experience, regardless of the specific requirements.





// JSX (JavaScript XML) is a syntax extension for JavaScript, primarily used with React to describe what the user interface should look like. It allows you to write HTML-like code within JavaScript, which React then transforms into regular JavaScript to render elements on the web page.

