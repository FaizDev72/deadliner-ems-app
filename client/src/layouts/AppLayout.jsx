import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AppLayout = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate('/login');
    // }, [])
    return (
        <div className='w-full sm:p-2 md:px-8 md:pt-6 min-h-screen flex'>
            <Outlet />
        </div>
    )
}

export default AppLayout
