


// HOCs : Higher Order Components 

import Unauthenticated from "../Components/UnAuthenticated/UnAuthenticated";


// If a compoent taken Component as an input or returns Components As an output is considered as a HOC 


function AuthHoc(props){

    const isLoggedIn = true;

    if(!isLoggedIn){
        return <Unauthenticated/>
    }

    return <div>

        {props.children}

    </div>

}


export default AuthHoc;