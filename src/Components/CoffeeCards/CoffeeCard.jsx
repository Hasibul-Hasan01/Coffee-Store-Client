import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, price, supplier, photo } = coffee;
    return (
        <div className='bg-[#151a21]'>
                <div className='grid grid-cols-7 my-3 mx-5'>
                    <div className='col-span-2 col-start-1'>
                        <span className='mx-auto my-auto'>
                            <img className='w-[180px] h-[200px]' src={photo} alt="Coffee-Image" />
                        </span>
                    </div>
                    <div className='col-span-4 col-start-3 my-auto items-center'>
                        <h1>Name : {name}</h1>
                        <h1>Supplier : {supplier}</h1>
                        <h1>Price : {price}</h1>
                    </div>
                    <div className='col-span-1 col-start-7 my-auto block'>
                        <button>X</button><br />
                        <button>X</button><br />
                        <button>X</button><br />
                    </div>
                </div>
        </div>
    );
};

export default CoffeeCard;