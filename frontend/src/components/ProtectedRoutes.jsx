import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../context/AuthProvider';

function ProtectedRoutes() {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) return null;

    return isAuthenticated ? (<Outlet />) : (<Navigate to='/login' replace state={{ from: location }} />);
}

export default ProtectedRoutes