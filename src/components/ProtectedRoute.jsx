import React, { useContext } from 'react'
import { AuthContext } from '../pages/Auth/context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    if(!auth) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute