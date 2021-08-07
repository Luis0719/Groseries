import {React} from 'react';
import styled from 'styled-components';
import DishContainer from './DishContainer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
`

const OptionButton = styled.button`
    margin: 0px 5px;
`

const createDish = (title='New Dish') => ({
 title,
 ingredients: [],
});

const renderDishes = (dishes, handleDishesChange) =>
    dishes.map(
        (dish, index) => {
            const handleRemove = () => {
                dishes.splice(index, 1);
                handleDishesChange();
            }

            return <div key={index}><DishContainer
                dish={dish}
                handleDishesChange={handleDishesChange}
                handleRemove={handleRemove}
            /></div>
        }
    )


const DishesContainer = ({dishes, setDishes}) => {
    const handleSave = () => {
        localStorage.setItem('dishes', JSON.stringify(dishes))
    }

    const handleCreateDish = () => {
        dishes.push(createDish());
        handleDishesChange();
    }

    const handleDishesChange = () => {
        const newDishesState = [...dishes];
        setDishes(newDishesState);
    }

    return <Container>
        <h1>Menu</h1>
        {renderDishes(dishes, handleDishesChange)}
        <div>
            <OptionButton onClick={handleCreateDish}>Nuevo Platillo</OptionButton>
            <OptionButton onClick={handleSave}>Guardar</OptionButton>
        </div>
    </Container>
}

export default DishesContainer;