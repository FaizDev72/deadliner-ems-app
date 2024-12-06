import { Button } from '@/components/ui/button';
import {
    DialogFooter,
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

const AddEmployeeDialog = () => {

    const [empName, setEmpName] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(null);
    const [address, setAddress] = useState(null);

    function submitHandler() {

    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className='mt-4'>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="empName" className="text-md">
                        Full Name (First Name, Middle Name, Last Name)
                    </Label>
                    <Input
                        onChange={(e) => setEmpName(e.target.value)}
                        id="empName"
                        required
                        type="text"
                        placeholder="Enter name"
                        value={empName}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email" className="text-md">
                        Email Address
                    </Label>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="gender" className="text-md">
                        Gender
                    </Label>
                    <Select
                        onValueChange={(value) => setGender(value)}
                        value={gender}
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
                        onChange={(e) => setMobileNumber(e.target.value)}
                        id="mob_number"
                        required
                        type="number"
                        placeholder="Enter Mobile Number"
                        value={mobileNumber}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address" className="text-md">
                        Address
                    </Label>
                    <Textarea
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        required
                        placeholder="Enter Address"
                        value={address}
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <DialogFooter>
                        <Button className="w-full" type="submit">
                            Create
                        </Button>
                    </DialogFooter>
                </div>
            </div>
        </form>
    )
}

export default AddEmployeeDialog
