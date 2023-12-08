import React, { useContext } from 'react';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext)

    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
          <div className="flex h-screen justify-center items-center">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        );
      }
    
      if (user && isAdmin) {
        return children;
      } else {
        return <Navigate state={{from : location}} to="/login" replace />;
      }
};

export default AdminRoute;