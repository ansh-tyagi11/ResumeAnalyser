import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthProvider';

function GuestRoutes() {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return null;

    return isAuthenticated ? (<Navigate to='/settings' replace />) : (<Outlet />);
}

export default GuestRoutes