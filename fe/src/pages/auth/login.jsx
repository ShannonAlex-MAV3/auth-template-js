import { useNavigate } from "react-router";
import { delay } from "../../utils/miscellaneous";
import useAuth from "../../store/auth";

const Login = () => {
    const navigate = useNavigate();
    const login = useAuth((state) => state.login);

    const handleLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await delay(2000);
        login({ name: 'John Doe' });
        navigate('/home');
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h3 className="text-lg">Login</h3> 
            <button type="button" className="p-2 rounded border-2 border-gray-200" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;