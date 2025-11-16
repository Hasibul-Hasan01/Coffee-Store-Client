import React from 'react';
import { Form } from 'react-router';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const supplier = e.target.supplier.value;
        const category = e.target.category.value;
        const qty = e.target.qty.value;
        const price = e.target.price.value;
        const details = e.target.details.value;

        const newCoffee = { name, supplier, category, qty, price, details }
        console.log(newCoffee);

        fetch(`http://localhost:3000/coffees`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'A new coffee added successfully.',
                    theme: 'dark',
                    icon: 'success',
                    draggable: true,
                });
                e.target.reset();
            }
            console.log('Add new coffee', data);
        })
    }
    return (
        <div className='w-[650px] h-[px] mx-auto bg-[#222a33] rounded-2xl mt-10'>
            <div className=''>
                <header className='text-center pt-8 px-5 pb-8'>
                    <h1 className='text-2xl font-bold'>Add New Coffee</h1>
                    <p className='text-xsm'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </header>
                <form onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-2 mx-5 gap-2'>
                        <section className='col-span-1 col-start-1'>
                            <span>
                                <label className=''>Name</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='name' placeholder='Enter Coffee Name' />
                            </span><br />
                            <span className=''>
                                <label className=''>Supplier</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='supplier' placeholder='Enter Coffee Supplier' />
                            </span><br />
                            <span>
                                <label className=''>Category</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='category' placeholder='Enter Coffee Category' />
                            </span><br />
                        </section>
                        <section className='col-span-2 col-start-2'>
                            <span>
                                <label className=''>Quntity</label><br />
                                <input className='bg-[#192128] input input-secondary' type="number" name='qty' placeholder='Enter Coffee QTY' />
                            </span><br />
                            <span>
                                <label className=''>Price</label><br />
                                <input className='bg-[#192128] input input-secondary' type="number" name='price' placeholder='Enter Coffee Price' />
                            </span><br />
                            <span>
                                <label className=''>Details</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='details' placeholder='Enter Coffee Details' />
                            </span><br />
                        </section>
                    </div>
                    <section className='mx-5'>
                        <span>
                            <label className=''>Photo</label><br />
                            <input className='bg-[#192128] w-full input input-secondary' type="text" name='photo' placeholder='Enter Photo url' />
                        </span>
                        <button className='w-full btn btn-secondary mt-5 mb-10' type="submit">Add Coffee</button>
                    </section>
                </form>

            </div>
        </div>
    );
};

export default AddCoffee;