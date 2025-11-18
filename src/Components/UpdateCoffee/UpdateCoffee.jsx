import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    // console.log('Get Coffee Details For Update', coffee);
    const { _id, name, supplier, category, qty, price, details, photo } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const supplier = e.target.supplier.value;
        const category = e.target.category.value;
        const qty = e.target.qty.value;
        const price = e.target.price.value;
        const details = e.target.details.valuek;
        const photo = e.target.photo.value;

        const UpdatedCoffee = { name, supplier, category, qty, price, details, photo }
        // console.log(UpdatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Update Coffee', data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Coffee Details Updated Successfully.",
                        icon: "success",
                        draggable: true
                    });
                }
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='w-[650px] h-[px] mx-auto bg-[#222a33] rounded-2xl mt-10'>
            <div className=''>
                <header className='text-center pt-8 px-5 pb-8'>
                    <h1 className='text-2xl font-mono font-bold'>Update Existing Coffee Details</h1>
                </header>
                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-2 mx-5 gap-2'>
                        <section className='col-span-1 col-start-1'>
                            <span>
                                <label className=''>Name</label><br />
                                <input className='bg-[#192128] input input-secondary' defaultValue={name} type="text" name='name' />
                            </span><br />
                            <span className=''>
                                <label className=''>Supplier</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='supplier' defaultValue={supplier} />
                            </span><br />
                            <span>
                                <label className=''>Category</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='category' defaultValue={category} />
                            </span><br />
                        </section>
                        <section className='col-span-2 col-start-2'>
                            <span>
                                <label className=''>Quntity</label><br />
                                <input className='bg-[#192128] input input-secondary' type="number" name='qty' defaultValue={qty} />
                            </span><br />
                            <span>
                                <label className=''>Price</label><br />
                                <input className='bg-[#192128] input input-secondary' type="number" name='price' defaultValue={price} />
                            </span><br />
                            <span>
                                <label className=''>Details</label><br />
                                <input className='bg-[#192128] input input-secondary' type="text" name='details' defaultValue={details} />
                            </span><br />
                        </section>
                    </div>
                    <section className='mx-5'>
                        <span>
                            <label className=''>Photo</label><br />
                            <input className='bg-[#192128] w-full input input-secondary' type="text" name='photo' defaultValue={photo} />
                        </span>
                        <button className='w-full btn btn-secondary mt-5 mb-10' type="submit">Update Coffee</button>
                    </section>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;