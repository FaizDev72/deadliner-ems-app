import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"


const EmployeeTable = ({ data }) => {

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleOpen = (employee) => {
        setSelectedEmployee(employee); // Load selected employee's data
    };

    const handleClose = () => {
        setSelectedEmployee(null); // Clear the state when modal closes
    };

    function submitHandler() {

    }

    return (
        <div>
            <div className='text-xl font-semibold mt-8 mb-4'>List of Employee's and their Task</div>
            <Table className="w-2/3 border">
                <TableHeader>
                    <TableRow className="text-center">
                        <TableHead className="w-[100px] text-center">Sr no</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">New Task</TableHead>
                        <TableHead className="text-center">Active</TableHead>
                        <TableHead className="text-center">Completed</TableHead>
                        <TableHead className="text-center">Failed</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((e) => (
                        <TableRow key={e.ID} className="text-center">
                            <TableCell className="font-medium">{e.ID}</TableCell>
                            <Dialog
                                onOpenChange={(isOpen) => {
                                    if (isOpen) {
                                        handleOpen(e); // Load employee data into state
                                    } else {
                                        handleClose(); // Reset state when modal closes
                                    }
                                }}
                            >
                                <DialogTrigger asChild>
                                    <TableCell className="cursor-pointer text-blue-500 underline">
                                        {e.Name}
                                    </TableCell>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit Employee Details</DialogTitle>
                                        <DialogDescription>
                                            Edit details for <span className="font-bold">{selectedEmployee?.Name}</span>. Click save to apply changes.
                                        </DialogDescription>
                                    </DialogHeader>
                                    {selectedEmployee && (
                                        <form onSubmit={submitHandler} className="mt-4">
                                            <div className="grid w-full items-center gap-4">
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="empName" className="text-md">
                                                        Full Name (First Name, Middle Name, Last Name)
                                                    </Label>
                                                    <Input
                                                        id="empName"
                                                        required
                                                        type="text"
                                                        placeholder="Enter name"
                                                        value={selectedEmployee.Name || ""}
                                                        onChange={(e) =>
                                                            setSelectedEmployee({
                                                                ...selectedEmployee,
                                                                Name: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="email" className="text-md">
                                                        Email Address
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        required
                                                        type="email"
                                                        placeholder="Enter email"
                                                        value={selectedEmployee.Email || ""}
                                                        onChange={(e) =>
                                                            setSelectedEmployee({
                                                                ...selectedEmployee,
                                                                Email: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="gender" className="text-md">
                                                        Gender
                                                    </Label>
                                                    <Select
                                                        value={selectedEmployee.Gender || ""}
                                                        onValueChange={(value) =>
                                                            setSelectedEmployee({
                                                                ...selectedEmployee,
                                                                Gender: value,
                                                            })
                                                        }
                                                    >
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select gender" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="male">Male</SelectItem>
                                                            <SelectItem value="female">Female</SelectItem>
                                                            <SelectItem value="others">Others</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="mob_number" className="text-md">
                                                        Mobile Number
                                                    </Label>
                                                    <Input
                                                        id="mob_number"
                                                        required
                                                        type="number"
                                                        placeholder="Enter Mobile Number"
                                                        value={selectedEmployee.MobileNumber || ""}
                                                        onChange={(e) =>
                                                            setSelectedEmployee({
                                                                ...selectedEmployee,
                                                                MobileNumber: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="address" className="text-md">
                                                        Address
                                                    </Label>
                                                    <Textarea
                                                        id="address"
                                                        required
                                                        placeholder="Enter Address"
                                                        value={selectedEmployee.Address || ""}
                                                        onChange={(e) =>
                                                            setSelectedEmployee({
                                                                ...selectedEmployee,
                                                                Address: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col mt-4">
                                                    <DialogFooter>
                                                        <Button className="w-full" type="submit">
                                                            Save Changes
                                                        </Button>
                                                    </DialogFooter>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </DialogContent>
                            </Dialog>
                            <TableCell>{e.NewTask}</TableCell>
                            <TableCell>{e.Active}</TableCell>
                            <TableCell>{e.Completed}</TableCell>
                            <TableCell>{e.Failed}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>;
            </Table>
        </div>
    )
}

export default EmployeeTable
