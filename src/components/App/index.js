import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../../tokens';
import Navbar from '../Navbar';
import Location from '../Location';
import RestaurantList from '../RestaurantList';
import * as S from './styles';

// mock data
import data from '../../restaurants';

const App = () => {
    const [neighborhood, setNeighborhood] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const isTabletOrLarger = useMediaQuery({ query: mediaQuery.tablet });

    useEffect(() => {
        // this is unneccessary for mock data however this is where I would fetch real data
        setNeighborhood(data.neighborhood);
        setRestaurants(data.restaurants);
    }, []);

    return (
        <S.Wrapper>
            <S.GlobalStyle />

            <Navbar />
            <Location location={neighborhood} />

            {isTabletOrLarger && <S.Body>{restaurants.length} Restaurants</S.Body>}

            <RestaurantList restaurants={restaurants} />
        </S.Wrapper>
    );
};

export default App;
