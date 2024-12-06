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
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useNavigate } from "react-router-dom";

const AdminRegistrationForm = () => {
    const [adminName, setadminName] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        if (email) navigate(`/verify/email/${email}`);
    }

    return (
        <div className="flex items-center justify-center h-full m-auto">
            <Card className="w-[350px] flex flex-col h-full max-h-[600px]">
                <CardHeader className="flex-shrink-0 border-b">
                    <CardTitle className="text-2xl">Admin Registration</CardTitle>
                    <CardDescription>Fill out the form to create an account</CardDescription>
                </CardHeader>

                <ScrollArea className="flex-grow overflow-auto customScrollbar">
                    <CardContent className="p-6">
                        <form onSubmit={(e) => submitHandler(e)} className='space-y-4'>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="adminName" className="text-md">
                                        Full Name (First Name, Middle Name, Last Name)
                                    </Label>
                                    <Input
                                        onChange={(e) => setadminName(e.target.value)}
                                        id="adminName"
                                        required
                                        type="text"
                                        placeholder="Enter name"
                                        value={adminName}
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
                            </div>
                        </form>
                    </CardContent>
                </ScrollArea>

                <DialogFooter className="flex-shrink-0 border-t p-4">
                    <Button className="w-full" type="submit" onClick={submitHandler}>
                        Send OTP
                    </Button>
                </DialogFooter>

            </Card>
        </div >
    )
}

export default AdminRegistrationForm