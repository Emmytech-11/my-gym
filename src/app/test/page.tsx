"use client";

import test from "node:test";
import { useState } from "react";

const Test = () => {
    const [name, setName] = useState("");
    const [isError, setIsError] = useState(false);

    const handleClick = () => {
        setIsError(false);

        if (name === "") {
            setIsError(true);
        } else {
            alert("Hi " + name);
        }
    };

    return (
        <main>
            <section className="w-full h-screen flex justify-center items-center bg-blue-100">
                <div>
                    <h1 className="text-2x1 font-bold">What is your name?</h1>
                    <div className="my-5">
                        <label className="mr-5">Name</label>
                        <input 
                        className="p-1" 
                        type="text" 
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        />
                        {isError && <p className="text-red-500">please enter your name</p>}
                     </div>
                     <button
                     onClick={handleClick}
                      className="px-8 py-2 text-white bg-blue-500 rounded-full cursor-pointer"
                     >
                        Click Me
                     </button>
                </div>
                </section>
        </main>
    )
};

export default Test;

