
const TaskCountsTab = () => {
    return (
        <div className="flex flex-col gap-6 mt-4">
            {/* Grid for task cards */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                    <h1 className="text-7xl font-semibold">2</h1>
                    <span className='text-3xl font-semibold'>New Task</span>
                </div>
                <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                    <h1 className="text-7xl font-semibold">4</h1>
                    <span className='text-3xl font-semibold'>Active Task</span>
                </div>
                <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                    <h1 className="text-7xl font-semibold">5</h1>
                    <span className='text-3xl font-semibold'>Completed Task</span>
                </div>
                <div className="aspect-auto rounded-xl bg-gray-200 shadow-sm flex items-start flex-col justify-between p-5 text-black" >
                    <h1 className="text-7xl font-semibold">1</h1>
                    <span className='text-3xl font-semibold'>Failed Task</span>
                </div>
            </div>
        </div>
    )
}

export default TaskCountsTab
