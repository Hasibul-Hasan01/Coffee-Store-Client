import { useLoaderData } from 'react-router';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <h1>This Is home page.</h1>
        </div>
    );
};

export default Home;