import { useLoaderData } from 'react-router';
import CoffeeCards from '../../Components/CoffeeCards/CoffeeCards';
import { useState } from 'react';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);
    // console.log(coffees);
    return (
        <div>
            <h1>This Is home page.</h1>
            <CoffeeCards coffees={coffees} setCoffees={setCoffees} />
        </div>
    );
};

export default Home;