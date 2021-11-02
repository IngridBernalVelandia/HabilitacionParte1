import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const PrivateRoutes = ({children}) => {
    const{isAuthenticated} = useAuth0();
    return isAuthenticated?(
        <div>
            este es mi private Route
            {children}
            
        </div>
    ):
    <div>
        <h1>No tienes permiso </h1>
    </div>
};

export default PrivateRoutes;