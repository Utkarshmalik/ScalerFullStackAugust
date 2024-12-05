import { Suspense, lazy, useEffect, useState } from "react";


function useFetchData(){

    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [exceptionMessage, setExceptionMessage] = useState(null);

    //componentDidMount + componentDidUpdate
    useEffect(async ()=>{
      console.log("I am inside useEffect"); 

      try{
       const usersRes = await fetch("https://dummyjson.com/users");
       const usersData = await usersRes.json();

       console.log("Fetched results ",usersData.users);

        setUsers(usersData.users);
       setIsLoading(false);
      }
      catch(e){
         setIsLoading(false);
         setExceptionMessage(e.message);

      }
    },[])



    function onFormSubmit(newUser){

      const updatedUsers = [newUser,...users];

      setUsers(updatedUsers);
    }

    return {users, setUsers, onFormSubmit, exceptionMessage, isLoading};
    
}



export {useFetchData};

