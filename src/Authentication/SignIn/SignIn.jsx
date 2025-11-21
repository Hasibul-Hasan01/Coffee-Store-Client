import { Link } from "react-router";

const SignIn = () => {
    return (
        <div className='w-[450px] h-[px] mx-auto bg-[#222a33] rounded-2xl mt-10'>
            <div className=''>
                <header className='text-center pt-8 px-5 pb-8'>
                    <h1 className='text-2xl font-mono font-bold'>Sign In</h1>
                </header>
                <form >
                    <div className=' mx-5 '>
                        <section className=''>
                            <span className=''>
                                <label className=''>Email</label><br />
                                <input className='bg-[#192128] input input-secondary w-full' type="email" name='email' />
                            </span><br />
                            <span>
                                <label className=''>Password</label><br />
                                <input className='bg-[#192128] input input-secondary w-full' type="password" name='password' />
                            </span><br />
                        </section>
                    </div>
                    <span>
                        <p className='mx-5 mt-3'>You don't have an account, Please <Link to='/signup'><span className='text-red-600'>Sign Up.</span></Link></p>
                    </span>
                    <section className='mx-5'>
                        <button className='w-full btn btn-secondary mt-5 mb-10' type="submit">Sign In</button>
                    </section>
                </form>

            </div>
        </div>
    );
};

export default SignIn;