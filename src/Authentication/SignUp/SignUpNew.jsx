import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from 'sweetalert2'

const SignUpNew = () => {
    const { createUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const password = e.target.password.value;
        const conFirmPass = e.target.confirmPass.value;

        const userProfile = { name, email, phone, address }

        if (password == conFirmPass) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('After SignUp Save data to DB', data);
                            if (data.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Your Profile Created Successfully.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            e.target.reset()
                        })
                }).catch(error => {
                    console.log(error);
                })
        }
        else {
            alert('Please Confirm your Password');
        }

    }
    return (
        <div className='w-[650px] h-[px] mx-auto bg-[#222a33] rounded-2xl mt-10'>
            <div className=''>
                <header className='text-center pt-8 px-5 pb-8'>
                    <h1 className='text-2xl font-mono font-bold'>Sign Up.</h1>
                </header>
                <form onSubmit={handleSignUp}>
                    <div className='grid grid-cols-2 mx-5 gap-2'>
                        <section className='col-span-1 col-start-1'>
                            <span>
                                <label className=''>Name</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='name' />
                            </span><br />
                            <span className=''>
                                <label className=''>Email</label><br />
                                <input className='bg-[#192128] input input-secondary' type="email" name='email' />
                            </span><br />
                            <span>
                                <label className=''>Password</label><br />
                                <input className='bg-[#192128] input input-secondary' type="password" name='password' />
                            </span><br />
                        </section>
                        <section className='col-span-2 col-start-2'>
                            <span>
                                <label className=''>Address</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='address' />
                            </span><br />
                            <span>
                                <label className=''>Phone</label><br />
                                <input className='bg-[#192128] input input-secondary' type="number" name='phone' />
                            </span><br />
                            <span>
                                <label className=''>Confirm Password</label><br />
                                <input className='bg-[#192128] input input-secondary' type="password" name='confirmPass' />
                            </span><br />
                        </section>
                    </div>
                    <section className='mx-5'>
                        <button className='w-full btn btn-secondary mt-5 mb-10' type="submit">Sign Up</button>
                    </section>
                </form>

            </div>
        </div>
    );
};

export default SignUpNew;