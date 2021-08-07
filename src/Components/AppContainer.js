import {React, useState} from 'react'
import styled from 'styled-components';
import DishesContainer from './DishesContainer';
import Summary from './Summary';

const Container = styled.div`
    width: 100%;
    display: flex;
`

const loadDishes = () => {
    const storedData = localStorage.getItem('dishes');
    return storedData ? JSON.parse(storedData) : [];
}

const AppContainer = () => {
    const [dishes, setDishes] = useState(loadDishes());

    return <Container>
        <DishesContainer dishes={dishes} setDishes={setDishes}/>
        <Summary dishes={dishes}/>
    </Container>
}

export default AppContainer;