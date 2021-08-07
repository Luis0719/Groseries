import {useState} from 'react';
import styled from 'styled-components';

const Container = styled.li`
`

const OptionButton = styled.button`
    margin-left: 5px;
`

const Ingredient = ({ingredient, handleDishesChange, handleRemove}) => {
    const [amount, setAmount] = useState(ingredient.amount);
    const [name, setName] = useState(ingredient.name);
    const [unit, setUnit] = useState(ingredient.unit);
    const [mode, setMode] = useState('edit');

    const handleAmountChange = (e) => {
        const newValue = e.target.value;
        if (newValue >= 0) {
            ingredient.amount = newValue;
            setAmount(newValue)
            handleDishesChange();
        }
    }

    const handleNameChange = (e) => {
        const newValue = e.target.value;
        setName(newValue);
        ingredient.name = newValue;
        handleDishesChange();
    }

    const handleUnitChange = (e) => {
        const newValue = e.target.value;
        setUnit(newValue);
        ingredient.unit = newValue;
        handleDishesChange();
    }

    const handleSave = () => {
        setMode('saved');
    }

    const handleEdit = () => {
        setMode('edit');
    }

    const renderValues = () => {
        return mode === 'edit'
            ? (<div className='inline'>
                <input autoFocus={true} type="number" value={amount} onChange={handleAmountChange}/>
                <select value={unit} onChange={handleUnitChange}>
                    <option value="pza">pza</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="l">l</option>
                </select>
                <input value={name} onChange={handleNameChange}/>
                <OptionButton onClick={handleSave}>Guardar</OptionButton>
                </div>)
            : (<div className='inline'>
                <div onClick={handleEdit}>
                    <span>{amount} </span>
                    <span>{unit} de </span>
                    <span>{name}</span>
                </div>
                </div>)
    }

    return <Container>
        {renderValues()}
        <OptionButton onClick={handleRemove}>Eliminar</OptionButton>
    </Container>
}

export default Ingredient;