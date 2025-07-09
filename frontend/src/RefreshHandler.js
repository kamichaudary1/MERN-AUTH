import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setAuthenticated(true);
            if( location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup" ) {
                navigate( "/home", { replace: false} );
            }
        }   
    }, [ location, navigate, setAuthenticated ])

    return (
        null
  )
}

export default RefreshHandler
