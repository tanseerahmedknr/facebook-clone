import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col mx-auto items-center py-52">
      <Image
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        height={240}
        width={280}
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-16 text-2xl cursor-pointer -mt-4 bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
