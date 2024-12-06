import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AppLayout = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate('/login');
    // }, [])
    return (
        <div className='w-full p-8'>
            <Outlet />
        </div>
    )
}

export default AppLayout
