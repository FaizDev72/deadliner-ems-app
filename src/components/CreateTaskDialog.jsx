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


const CreateTaskDialog = () => {

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [assignTo, setAssignTo] = useState(null);
    const [category, setCategory] = useState(null);
    const [deadline, setDeadline] = useState(null);


    function submitHandler() {

    }

    return (

        <form onSubmit={submitHandler}>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="title" className="text-md">Title</Label>
                    <Input
                        id="title"
                        required
                        type="text"
                        placeholder="Enter task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description" className="text-md">Description</Label>
                    <Input
                        id="description"
                        required
                        type="text"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="assignTo" className="text-md">Assign To</Label>
                    <Select value={assignTo} onValueChange={(value) => setAssignTo(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select employee" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Faiz">Faiz</SelectItem>
                            <SelectItem value="Shaad">Shaad</SelectItem>
                            <SelectItem value="Sahil">Sahil</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="category" className="text-md">Category</Label>
                    <Input
                        id="category"
                        required
                        type="text"
                        placeholder="Enter category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="deadline" className="text-md">Deadline</Label>
                    <Input
                        id="deadline"
                        required
                        type="date"
                        placeholder="Enter deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <div className="flex flex-col mt-4">
                        <Button className="w-full" type="submit">Create</Button>
                    </div>
                </DialogFooter>
            </div>
        </form>
    )
}

export default CreateTaskDialog
