import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../../tokens';
import Navbar from '../Navbar';
import Location from '../Location';
import * as S from './styles';

// mock data
import data from '../../restaurants';

const App = () => {
    const [neighborhood, setNeighborhood] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const isLaptopOrLarger = useMediaQuery({ query: mediaQuery.laptop });

    console.log({ restaurants });

    useEffect(() => {
        // this is unneccessary for mock data however this is where I would fetch real data
        setNeighborhood(data.neighborhood);
        setRestaurants(data.restaurants);
    }, []);

    return (
        <S.Wrapper>
            <Navbar />
            <Location location={neighborhood} />
            {isLaptopOrLarger && <S.Body>{restaurants.length} Restaurants</S.Body>}
        </S.Wrapper>
    );
};

export default App;
