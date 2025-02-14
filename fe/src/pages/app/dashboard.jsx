import { Outlet } from "react-router";

const Dashboard = () => {
    return (
        <div className="w-screen h-screen flex">
            <div className="h-screen w-[20%] p-4 border-r-2 border-gray-300 flex flex-col justify-between">
                <h3 className="text-lg">Sidebar</h3>
                <button type="button" className="cursor-pointer border-gray-200 border-2 rounded-lg p-2">Logout</button>
            </div>
            <div className="h-screen w-[80%]">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;