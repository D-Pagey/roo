import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../../tokens';
import Navbar from '../Navbar';
import Location from '../Location';
import RestaurantList from '../RestaurantList';
import * as S from './styles';

// mock data
import data from '../../restaurants';

// [{
//     name: 'Mexican',
//     count: 24
// }]

// {
//     mexican : 24
// }

// get all the names
// get the counts

const getAllTags = (array) => {
    return array.reduce((acc, curr) => {
        return [...acc, ...curr.tags];
    }, []);
};

const handleDuplicates = (array) => {
    return array.reduce((acc, curr) => {
        // check if exists in acc
        if (acc[curr]) {
            return {
                ...acc,
                [curr]: acc[curr] + 1
            };
        }

        return {
            ...acc,
            [curr]: 1
        };
        // if yes, increase count
        // if it doesnt, add with count of 1
    }, {});
};

const cats = handleDuplicates(getAllTags(data.restaurants));
const keys = Object.keys(cats);

// take a cat
// check if it exists in the tags with in rest
// filter that just rest than include tag

const filterData = (array, cat) => {
    if (cat === '') return array;

    return array.filter((item) => {
        return item.tags.includes(cat);
    });

    // check tags.includes filter
    // filter down
};

const App = () => {
    const [neighborhood, setNeighborhood] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [filter, setFilter] = useState('');
    const isTabletOrLarger = useMediaQuery({ query: mediaQuery.tablet });

    useEffect(() => {
        setRestaurants(filterData(data.restaurants, filter));
    }, [filter]);

    useEffect(() => {
        // state changes
        // run this filter function
        setNeighborhood(data.neighborhood);
        // setRestaurants(data.restaurants);
    }, []);

    const handleClick = (cat) => () => setFilter(cat);

    return (
        <S.Wrapper>
            <S.GlobalStyle />

            <Navbar />
            <Location location={neighborhood} />

            <ul>
                {keys.map((key) => {
                    return (
                        <li onClick={handleClick(key)}>
                            {key} ({cats[key]})
                        </li>
                    );
                })}
            </ul>

            <RestaurantList restaurants={restaurants} />
        </S.Wrapper>
    );
};

export default App;
