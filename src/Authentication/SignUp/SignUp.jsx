import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const SignUp = () => {
    const { createUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='w-[450px] h-[px] mx-auto bg-[#222a33] rounded-2xl mt-10'>
            <div className=''>
                <header className='text-center pt-8 px-5 pb-8'>
                    <h1 className='text-2xl font-mono font-bold'>Sign Up</h1>
                </header>
                <form onSubmit={handleSignUp}>
                    <div className=' mx-5 '>
                        <section className=''>
                            <span>
                                <label className=''>Name</label><br />
                                <input className='bg-[#192128] input input-secondary w-full' type="text" name='name' />
                            </span><br />
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
                        <p className='mx-5 mt-3'>You aleardy have an account, Please <Link to='/signin'><span className='text-red-600'>Sign In.</span></Link></p>
                    </span>
                    <section className='mx-5'>
                        <button className='w-full btn btn-secondary mt-5 mb-10' type="submit">Sign Up</button>
                    </section>
                </form>

            </div>
        </div>
    );
};

export default SignUp;