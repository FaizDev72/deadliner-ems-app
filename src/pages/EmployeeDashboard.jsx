import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import TaskCountsTab from '../components/employee/TaskCountsTab';
import TaskCards from '../components/employee/TaskCards';

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
                    <LogOut />
                    <span>Logout</span>
                </Button>
            </div>

            {/* Task Count Tab */}
            <TaskCountsTab />

            {/*Task */}
            <TaskCards />

        </div>
    );
};

export default EmployeeDashboard;
