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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const [agencyName, setAgencyName] = useState(null);
    const [domain, setDomain] = useState(null);
    const [location, setLocation] = useState(null);

    const navigate = useNavigate();

    function OnSubmitHandler(e) {
        e.preventDefault();
        navigate('/create/admin/account');
    }

    return (
        <div className='h-full flex items-center justify-center mx-auto place-self-center'>
            <Card className="w-[350px] text-left">
                <CardHeader>
                    <CardTitle className="text-2xl">Create Agency</CardTitle>
                    <CardDescription>Create your new agency in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => OnSubmitHandler(e)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Agency Name</Label>
                                <Input required id="name" type="text" value={agencyName} onChange={(e) => setAgencyName(e.target.value)} placeholder="Name of your Agency" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Business Domain</Label>
                                <Input required id="domain" type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="Name of Business Domain" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="location">Business Location</Label>
                                <Input required id="name" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Name of your Location" />
                            </div>
                        </div>
                        <Button className="w-full my-6">Register Agency</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default RegisterPage
