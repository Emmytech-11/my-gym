"use client";

import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState ("");

    const [file, setFile] =useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const [fileError, setFileError] = useState("");

    const LoginUser = () => {
        if (username === "") {
            setUsernameError("Username field is required");
        }

        if (password === "") {
            setpasswordError("Password feild is required");
        }

        if (username && password) {
            alert("Login successfull");
        }

        if (!file) {
            setFileError("upload your cv");
        }

        if (username && password && password.length > 6 && file) {
            alert("login successfull");
        }
    };

    return (
        <main>
            <section className="w-full h-screen bg-grey-100">
                <div className="w-full h-full flex  justify-center items-center">
                    <form className="w-[350px] py-5 px-4 bg-blue-200">
                        <h1 className="text-3x1 font-bold text-center mb-5">Login here</h1>
                        <div className="mb-5 flex flex-col gap-1">
                            <label>Username</label>
                            <input className="flex-1 px-1 py-[6px] border-[1px] border-black"
                             type="text" 
                             placeholder="Enter your username" 
                             value={username}
                             onChange={(e) => setUsername(e.target.value)}
                             />
                             <p className="text-red-500"> {usernameError}</p>
                             </div>
                             <div className="mb-5 flex flex-col gap-1">
                                <label>password</label>
                                <input className="flex-1 px-1 py-[6px] border-[1px] border-black" 
                                type="password"
                                 placeholder="Enter your password"
                                 onChange={(e) => setpassword(e.target.value)}
                                />
                                <p className="text-red-500">{passwordError}</p>
                                </div>
                                <div className="mb-5 flex flex-col gap-1">
                                    <label>File</label>
                                    <input 
                                    className="flex-1 px-1 py-[6px] border-[1px] border-black" 
                                    type="file"
                                     placeholder="Insert your CV" 
                                    onChange={(e) => setFile(e.target.value)}
                                    />
                                    <p className="text-red-500">{fileError}</p>
                                    </div>
                                <button 
                                className="px-10 py-2 my-4 rounded-full text-white bg-blue-500 transition-all duration-300 hover:bg-blue-500/70" 
                                type="button" 
                                onClick={LoginUser}
                                >
                                    Login
                                </button>
                             </form>
                         </div>
                        </section>
                    </main>
                );
            }

            export default Login;