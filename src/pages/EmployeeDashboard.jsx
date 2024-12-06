import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RiLogoutCircleRFill } from "react-icons/ri";
import { LogOut } from 'lucide-react';

const EmployeeDashboard = () => {
    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div className='flex flex-col items-start py-4'>
                    <h3 className="text-lg font-medium text-gray-700">Hello</h3>
                    <h1 className="text-5xl font-semibold">Faiz</h1>
                </div>
                <Button className='flex items-center justify-center gap-2 text-lg' variant="secondary">
                    {/* <RiLogoutCircleRFill className="mr-2 h-4 w-4" /> */}
                    <LogOut/>
                    <span>Logout</span>
                </Button>
            </div>

            {/* Task Count Tab */}
            <div className="flex flex-col gap-6 mt-4">
                {/* Grid for task cards */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                        <h1 className="text-7xl font-semibold">2</h1>
                        <span className='text-3xl font-semibold'>New Task</span>
                    </div>
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                        <h1 className="text-7xl font-semibold">4</h1>
                        <span className='text-3xl font-semibold'>Active Task</span>
                    </div>
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                        <h1 className="text-7xl font-semibold">5</h1>
                        <span className='text-3xl font-semibold'>Completed Task</span>
                    </div>
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                        <h1 className="text-7xl font-semibold">1</h1>
                        <span className='text-3xl font-semibold'>Failed Task</span>
                    </div>
                </div>
            </div>

            {/*Task */}
            <div className="flex flex-col gap-6 mt-8">
                <h1 className="text-5xl font-semibold">Task</h1>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex justify-between items-start flex-col p-4 text-black">
                        {/* head */}
                        <div className='flex justify-between items-center w-full '>
                            {/* category */}
                            <Badge>Event Planning</Badge>
                            {/* Deadline date */}
                            <div className='text-black font-semibold'>29-03-2019</div>
                        </div>

                        {/* Task Title */}
                        <h1 className='text-3xl font-semibold mt-4'>Title</h1>

                        {/* Task Desctiption */}
                        <span className='text-lg font-semibold mb-4'>Description</span>

                        {/* Button Areat */}
                        <div className='flex flex-wrap gap-2'>
                            <Button>Accept Task</Button>
                            <Button>Accept Task</Button>
                            <Button variant={"destructive"}>Reject Task</Button>

                        </div>
                    </div>
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex justify-between items-start flex-col p-4 text-black">
                        {/* head */}
                        <div className='flex justify-between items-center w-full '>
                            {/* category */}
                            <Badge>Event Planning</Badge>
                            {/* Deadline date */}
                            <div className='text-black font-semibold'>29-03-2019</div>
                        </div>

                        {/* Task Title */}
                        <h1 className='text-3xl font-semibold mt-4'>Title</h1>

                        {/* Task Desctiption */}
                        <span className='text-lg font-semibold mb-4'>Description</span>

                        {/* Button Areat */}
                        <div className='flex flex-wrap gap-2'>
                            <Button>Accept Task</Button>
                            <Button>Accept Task</Button>
                            <Button variant={"destructive"}>Reject Task</Button>

                        </div>
                    </div>
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex justify-between items-start flex-col p-4 text-black">
                        {/* head */}
                        <div className='flex justify-between items-center w-full '>
                            {/* category */}
                            <Badge>Event Planning</Badge>
                            {/* Deadline date */}
                            <div className='text-black font-semibold'>29-03-2019</div>
                        </div>

                        {/* Task Title */}
                        <h1 className='text-3xl font-semibold mt-4'>Title</h1>

                        {/* Task Desctiption */}
                        <span className='text-lg font-semibold mb-4'>Description</span>

                        {/* Button Areat */}
                        <div className='flex flex-wrap gap-2'>
                            <Button>Accept Task</Button>
                            <Button>Accept Task</Button>
                            <Button variant={"destructive"}>Reject Task</Button>

                        </div>
                    </div>
                    <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex justify-between items-start flex-col p-4 text-black">
                        {/* head */}
                        <div className='flex justify-between items-center w-full '>
                            {/* category */}
                            <Badge>Event Planning</Badge>
                            {/* Deadline date */}
                            <div className='text-black font-semibold'>29-03-2019</div>
                        </div>

                        {/* Task Title */}
                        <h1 className='text-3xl font-semibold mt-4'>Title</h1>

                        {/* Task Desctiption */}
                        <span className='text-lg font-semibold mb-4'>Description</span>

                        {/* Button Areat */}
                        <div className='flex flex-wrap gap-2'>
                            <Button>Accept Task</Button>
                            <Button>Accept Task</Button>
                            <Button variant={"destructive"}>Reject Task</Button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EmployeeDashboard;
