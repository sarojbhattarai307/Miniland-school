

const LoginForm = () => {
  return (
   <>
   <main className='min-h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-white p-4 flex justify-center items-center'>
    
    <div className="max-w-md w-full bg-white p-4 rounded-md flex justify-center items-center flex-col">
      <div className="flex gap-5 items-center">
        <img className="h-16 w-auto" src="images/logo.jpg" alt="Company-Logo" />
        <h1 className="text-4xl">HEBS</h1>
      </div>

     <div className="flex items-center flex-col justify-center">
       <h1 className="my-5 text-[28px] font-extrabold">Welcome Back To HEBS</h1>
      <form className="flex items-center justify-center flex-col gap-3" action="">
        <input className="border border-black w-80 h-10 rounded-md text-xl p-3" type="text" placeholder="Email Adress" />
        <input className="border-none w-80 h-10 rounded-md text-xl p-3  bg-[#5B5BF9] text-white flex items-center" type="submit" value="Continue" />
      </form>
      <div>
      <p className="py-2">Don't have an account ?<a className="text-[#3434e2]" href="/"> Sign Up</a></p>
      <div className="flex flex-col gap-2">
        <div className="border border-black w-80 h-10 rounded-md text-xl p-3 flex items-center">Continue with Google</div>
        <div className="border border-black w-80 h-10 rounded-md text-xl p-3 flex items-center">Continue with Facebook</div>
        <div className="border border-black w-80 h-10 rounded-md text-xl p-3 flex items-center">Continue with Apple</div>
      </div>
      </div>
    </div>

    </div>
   </main>
   </>
  )
}

export default LoginForm