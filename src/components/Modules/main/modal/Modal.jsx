import './modal.css'
const Modal = ({ modelClose, order, inMod, upMod }) => {

  return (

    <>
      <section className='fixed inset-0 bg-stone-600/60 z-50 grid place-content-center'>
        <div className='model-bg p-6 shadow-2xl'>
          <div className='text-end'><button className='px-2 w-fit' onClick={modelClose}>X</button></div>
          {order === 1 &&
            <fieldset>
              <form>  
                <div>
                  <label className='block mb-1' htmlFor="name_id">Enter your Name</label>
                  <input className='mb-4 w-full' type="text" id='name_id' placeholder='enter your name' />
                </div>
                <div>
                  <label className='block mb-1' htmlFor="email_id">Enter Email</label>
                  <input className='mb-4 w-full' type="text" id='email_id' placeholder='enter your Email ID' />
                </div>
                <div>
                  <label className='block mb-1' htmlFor="password_one">Set A Password</label>
                  <input className='mb-4 w-full' type="password" id='password_one' placeholder='Type your password' />
                </div>
                <div>
                  <label className='block mb-1' htmlFor="password_two">Confirm your Password</label>
                  <input className='mb-4 w-full' type="password" id='password_two' placeholder='confirm your password' />
                </div>
                <div>
                  <input type="checkbox" id='check_signup' className='mr-2 accent-teal-600' />
                  <label htmlFor="check_signup">By clicking here you are in agreement with our terms and conditions</label>
                </div>
                <div className='text-center'>
                  <button>Sign Up</button>
                </div>
                <div className='mt-4'>
                  <small>Already have an account <a href="/#" className='text-teal-600 underline' onClick={upMod}>Sign In</a></small>
                </div>
              </form>
            </fieldset>}

          {order === 2 &&
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
                  <small>Don't have an account <a href="/#" className='text-teal-600 underline' onClick={inMod}>Sign Up here</a></small>
                </div>
                <div>
                  <p>Signup with other client ID</p>
                </div>
              </form>
            </fieldset>
          }
        </div>
      </section>
    </>
  )
}

export default Modal