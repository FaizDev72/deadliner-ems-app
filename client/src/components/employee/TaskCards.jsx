import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TaskCards = () => {
    return (
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
    )
}

export default TaskCards
