import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState();

    function submitHandler(e) {
        e.preventDefault();
        navigate(`/verify/email/${email}`);
    }

    return (
        <div className='h-full flex items-center justify-center mx-auto place-self-center'>
            <Card className="w-[350px] text-left">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Enter Email for OTP verification</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email" className="text-md">Email</Label>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email" required type="email"
                                    placeholder="Enter email address"
                                    value={email}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Button className="w-full" type="submit">Send OTP</Button>
                            </div>

                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage
