import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h3 className="text-lg">Login</h3> 
            <button type="button" className="p-2 rounded border-2 border-gray-200" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate('/home');
            }}>Login</button>
        </div>
    )
}

export default Login;