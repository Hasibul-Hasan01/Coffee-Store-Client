import React from 'react';
import CoffeeCard from './CoffeeCard';

const CoffeeCards = ({ coffees }) => {
    return (
        <div className='px-30'>
            <section className='text-center'>
                <p className='mt-8 font-mono'>--- Sip & Savor ---</p>
                <h1 className='mt-1 text-3xl font-mono font-bold'>Our Popular Products</h1>
                <button className='btn btn-outline mt-4 mb-8'>Add Coffee</button>
            </section>
            <section className='grid grid-cols-2 gap-5'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
                }
            </section>

        </div>
    );
};

export default CoffeeCards;