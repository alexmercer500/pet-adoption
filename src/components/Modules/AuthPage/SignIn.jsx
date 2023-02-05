import React from 'react'

const SignIn = ({logMethod}) => {
  const {setLogUser, setLogType} = logMethod
  return (
    <section className='fixed inset-0 bg-stone-600/60 z-50 grid place-content-center'>
      <div className='model-bg p-6 shadow-2xl'>
        <div className='text-end'><button className='px-2 w-fit' onClick={()=>{setLogUser(false)}}>X</button></div>
        <fieldset>
          <form>
            <div>
              <label className='block mb-1' htmlFor="email_conf">Enter your Email</label>
              <input className='mb-4 w-full' type="text" id='email_conf' placeholder='enter your Email' />
            </div>
            <div>
              <label className='block mb-1' htmlFor="password_conf">Enter your Password</label>
              <input className='mb-4 w-full' type="password" id='password_conf' placeholder='Type your password' />
            </div>
            <div>
              <input type="checkbox" id='check_signin' className='mr-2 accent-teal-600' />
              <label htmlFor="check_signin">By clicking here you are in agreement with our terms and conditions</label>
            </div>
            <div className='text-center'>
              <button>Login</button>
            </div>
            <div className='mt-4'>
              <small>Don't have an account <a href="/#" className='text-teal-600 underline' onClick={()=>{setLogType('sign-up')}}>Sign Up here</a></small>
            </div>
            <div>
              <p>Signup with other client ID</p>
            </div>
          </form>
        </fieldset>
      </div>
    </section>

  )
}

export default SignIn