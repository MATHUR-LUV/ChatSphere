import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const {loading, login} = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);

  };
  return (
    <div className='flex flex-col items-center justify-center min-w-100 mx-auto py-20 w-100'>
      <div className='h-full w-500 bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-10
'>    
        
        <h1 className='text-5xl font-semibold text-center text-black pb-5'>
        <span className='text-black'> ChatSphere </span>
        </h1>
        <h1 className='text-3xl font-semibold text-center text-black'>
        <span className='text-black'> LOGIN </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div >
            <label className='label p-2 flex flex-col items-center justify-center'>
              <span className='text-3xl label-text text-white-500'>Username</span>
              <input type='text' placeholder='Enter username' className='w-150 input input-bordered h-8 py-5 my-3' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            

          </div>
          <div >
            <label className='label p-2 flex flex-col items-center justify-center'>
              <span className='text-3xl label-text text-white-500'>Password</span>
              <input type='password' placeholder='Enter Password' className='w-150 input input-bordered h-8 py-5 my-3' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            

          </div>
          <Link to={'/signup'} className='text-2xl  hover:underline hover:text-red-200 mt-2 inline-block  flex items-center justify-center '>
 						{"Don't"} have an account?
 					</Link>
           <div className='flex items-center justify-center'>
						<button className=' btn btn-ghost mt-2 bg-black hover:bg-gray-500 max-w-50' disabled={loading}>
            {loading ? <span className='loading loading-spinner '></span> : "Login"}
            </button>
					</div>
           
        </form>
       


      </div>

    </div>
  )
}

export default Login
