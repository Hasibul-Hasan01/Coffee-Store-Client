import { useLoaderData } from 'react-router';
import CoffeeCards from '../../Components/CoffeeCards/CoffeeCards';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <h1>This Is home page.</h1>
            <CoffeeCards coffees={coffees} />
        </div>
    );
};

export default Home;