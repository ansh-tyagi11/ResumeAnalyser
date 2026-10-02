import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthProvider';

const mainLinks = [
    { icon: 'grid_view', label: 'Dashboard', path: '/dashboard' },
    { icon: 'description', label: 'My Resumes', path: '/my-resumes' },
    { icon: 'fact_check', label: 'Resume Analysis', path: '/resume-analysis' },
    { icon: 'track_changes', label: 'Job Match', path: '/job-match' },
    { icon: 'history', label: 'History', path: '/history' },
];

const accountLinks = [
    { icon: 'account_circle', label: 'Profile', path: '/profile' },
    { icon: 'settings', label: 'Settings', path: '/settings' },
    { icon: 'logout', label: 'Logout', path: 'logout' },
];

const SidebarItem = ({ icon, label, path, pathname, onClick }) => {
    const isActive = pathname === path;

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            className="group relative z-0 flex w-full cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-2 py-2 text-left hover:z-30 lg:px-4"
        >
            <span aria-hidden="true" className={`material-symbols-outlined shrink-0 ${isActive ? 'text-blue-500' : 'text-[#454653]'}`}>
                {icon}
            </span>
            <span aria-hidden="true" className="pointer-events-none invisible absolute left-full z-50 ml-2 -translate-x-1 whitespace-nowrap rounded-md border border-[#C6C5D5]/40 bg-white px-3 py-1 text-sm text-[#454653] opacity-0 shadow-sm transition-all duration-200 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 lg:hidden">
                {label}
            </span>
            <span className={`hidden text-lg leading-5 tracking-[0.3px] lg:block ${isActive ? 'text-blue-500' : 'text-[#454653]'}`}>
                {label}
            </span>
        </button>
    );
};

const Sidebar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { setUser, setIsAuthenticated } = useAuth();

    const logout = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/logOut', {
                method: 'POST',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Logout request failed');
            }

            setUser(null);
            setIsAuthenticated(false);
            navigate('/');
        } catch (error) {
            console.error('Unable to log out:', error);
        }
    }

    return (
        <>
            <aside className="fixed bottom-0 left-0 top-[10vh] z-20 flex w-16 flex-col justify-between overflow-visible border-r border-[#C6C5D5]/40 bg-white/95 px-2 py-4 shadow-sm lg:w-[20vw] lg:px-4">
                <nav className="flex flex-col gap-2 lg:px-8">
                    {mainLinks.map((item) => (
                        <SidebarItem key={item.label} {...item} pathname={pathname} onClick={() => navigate(item.path)} />
                    ))}
                </nav>
                <nav className="flex flex-col gap-2 lg:px-8">
                    {accountLinks.map((item) => (
                        <SidebarItem
                            key={item.label}
                            {...item}
                            pathname={pathname}
                            onClick={item.path === 'logout' ? logout : () => navigate(item.path)}
                        />
                    ))}
                </nav>
            </aside>
        </>
    )
};

export default Sidebar;
