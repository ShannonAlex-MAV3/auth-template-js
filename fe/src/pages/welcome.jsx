import { Link } from "react-router";

const Welcome = () => {
  return (
    <div className="h-screen w-screen">
      <div className="w-screen flex justify-center items-center h-full">
        <div className="fixed top-0 left-0 flex gap-5 p-2 w-screen h-[20%]">
          <Link to="auth/login">Login</Link>
          <Link to="auth/sign-up">Sign up</Link>
        </div>
        <h1 className="text-5xl">Welcome</h1>
      </div>
    </div>
  );
};

export default Welcome;
