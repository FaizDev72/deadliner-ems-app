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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { useNavigate, useParams } from 'react-router-dom';

const VerifyEmail = () => {
    let { email } = useParams();
    const navigate = useNavigate();
    const [pin, setPin] = useState();

    function submitHandler(e) {
        e.preventDefault();
        // alert(pin)   
    }

    if (!email) {
        navigate('/login');
        return null;
    }

    return (
        <Card className="w-[350px] text-left">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Login to access your dashboard</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => { submitHandler(e) }}>
                    <InputOTP
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        value={pin}
                        onChange={(value) => setPin(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <Button type="submit" className="mt-4">Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default VerifyEmail;
