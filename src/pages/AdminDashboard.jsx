import { Button } from '@/components/ui/button';
import { LogOut, UserRound, UsersRound } from 'lucide-react';
import { CalendarPlus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import EmployeeTable from '../components/admin/EmployeeTable';
import CreateTaskDialog from '../components/admin/CreateTaskDialog';
import AddEmployeeDialog from '../components/admin/AddEmployeeDialog';



const data = [
    {
        ID: 1,
        Name: "Maya",
        NewTask: 2,
        Active: 1,
        Completed: 3,
        Failed: 1,
        Email: "maya@example.com",
        Gender: "female",
        MobileNumber: "9876543210",
        Address: "123 Elm Street, Springfield"
    },
    {
        ID: 2,
        Name: "Vikram",
        NewTask: 0,
        Active: 3,
        Completed: 2,
        Failed: 0,
        Email: "vikram@example.com",
        Gender: "male",
        MobileNumber: "9123456789",
        Address: "456 Oak Avenue, Gotham City"
    },
    {
        ID: 3,
        Name: "Sara",
        NewTask: 3,
        Active: 0,
        Completed: 1,
        Failed: 2,
        Email: "sara@example.com",
        Gender: "female",
        MobileNumber: "9234567891",
        Address: "789 Maple Lane, Star City"
    },
    {
        ID: 4,
        Name: "Neha",
        NewTask: 1,
        Active: 4,
        Completed: 2,
        Failed: 1,
        Email: "neha@example.com",
        Gender: "female",
        MobileNumber: "9345678912",
        Address: "321 Pine Drive, Metropolis"
    },
    {
        ID: 5,
        Name: "Rahul",
        NewTask: 3,
        Active: 2,
        Completed: 1,
        Failed: 0,
        Email: "rahul@example.com",
        Gender: "male",
        MobileNumber: "9456789123",
        Address: "654 Cedar Road, Central City"
    }
];


const AdminDashboard = () => {


    function handleEditSubmit() {

    }
    function handleTaskChange() {

    }

    return (
        <div className='w-full'>
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div className='flex flex-col items-start py-4'>
                    <h3 className="text-lg font-medium text-gray-700">Hello</h3>
                    <h1 className="text-5xl font-semibold">Administrator</h1>
                </div>
                <Button className='flex items-center justify-center gap-2 text-lg' variant="secondary">
                    {/* <RiLogoutCircleRFill className="mr-2 h-4 w-4" /> */}
                    <LogOut />
                    <span>Logout</span>
                </Button>
            </div>
            <div className='flex items-center justify-start gap-4 mt-4'>
                {/* For Create Task */}
                <Dialog>
                    <DialogTrigger>
                        <Button><CalendarPlus /> Create Task</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create Task</DialogTitle>
                            <DialogDescription>
                                Fill the form to create a task for an employee.
                            </DialogDescription>
                        </DialogHeader>
                        <CreateTaskDialog />
                    </DialogContent>
                </Dialog>

                {/* Employee Form */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"secondary"}>
                            <UserRound />
                            Add Employee
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <ScrollArea className="max-h-[90vh] overflow-y-auto pe-2">
                            <DialogHeader>
                                <DialogTitle>Add New Employee</DialogTitle>
                                <DialogDescription>
                                    Fill the Employee's Details in the form
                                </DialogDescription>
                            </DialogHeader>
                            <AddEmployeeDialog />
                        </ScrollArea>
                    </DialogContent>
                </Dialog>

                <Button variant="outline"><UsersRound />Employee's List</Button>
            </div>
            {/* Table */}
            <EmployeeTable data={data} />

        </div>
    )
}

export default AdminDashboard