import React, { useEffect, useState } from 'react';
import data from '../../restaurants';
import Navbar from '../Navbar';
import Location from '../Location';
import * as S from './styles';

const App = () => {
    const [neighborhood, setNeighborhood] = useState('');

    useEffect(() => {
        setNeighborhood(data.neighborhood);
    }, []);

    return (
        <div>
            <Navbar />
            <Location location={neighborhood} />
            <S.Body>301 Locations</S.Body>
        </div>
    );
};

export default App;
