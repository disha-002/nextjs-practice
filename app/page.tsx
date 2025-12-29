
import Link from "next/link"
//import {useRouter} from "next/navigation";

export default function Home(){
  //const router = useRouter();

  return (
    <div className='text-lg w-screen h-screen flex items-center justify-center'>
      <div>
        Todo application
        {/*
        <button onClick={()=> {
          router.push("/signin")
        }}>Sign in</button>*/}
        <br/>
        <Link className='text-md border m-2' href="/signin">Sign in to Todo</Link>
        <br/>
        <Link className='text-md border m-2' href="/signup">Sign up to Todo</Link>
        </div>
    </div>
  )
}