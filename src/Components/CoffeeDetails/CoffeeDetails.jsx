import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const {photo, name, supplier, price,} = coffee;
    console.log(coffee);
    return (
        <div className='bg-[#151a21] mx-40 mt-10 rounded-2xl'>
            <div className='grid grid-cols-7 my-3 mx-5'>
                <div className='col-span-3 col-start-1'>
                    <span className='mx-auto my-auto'>
                        <img className='w-[200px] h-[270px]' src={photo} alt="Coffee-Image" />
                    </span>
                </div>
                <div className='col-span-4 col-start-4 my-auto items-center'>
                    <h1>Name : {name}</h1>
                    <h1>Supplier : {supplier}</h1>
                    <h1>Price : {price}</h1>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;