"use client"

import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return (
    <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-2">
                <input type="text" placeholder="Username" onChange={e=>{
                    setUsername(e.target.value)}}></input>
                <input type="password" placeholder="Password" onChange={e=>{
                    setPassword(e.target.value);
                }}></input>
                <button onClick={async ()=>{
                    await axios.post("http://localhost:3000/api/v1/signup",{
                        username,
                        password
                    })

                    router.push("/signin");
                }} >Sign up</button>
            </div>
    </div>
    )
}

// to redirect to sign in , we await the function that is posting the request , making it async function and using router from useRouter hook redirect to the sign in page