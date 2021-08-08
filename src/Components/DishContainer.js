import { useState } from "react"
import styled from "styled-components"
import Ingredient from "./Ingredient"
import { TiDelete } from "react-icons/ti"

const Container = styled.div`
  display: inline-block;
  margin: 5px 0;
  padding: 20px 10px;
  border: 1px solid black;
  border-radius: 10px;
  min-width: 400px;
`

const IngredientsContainer = styled.ul``

const OptionButton = styled.button`
  margin: 0px 5px;
`

const createIngredient = () => ({
  name: "New Ingedient",
  amount: 1,
  unit: "pza",
})

const renderIngredients = (ingredients, handleDishesChange) =>
  ingredients.length === 0
    ? "Sin ingredientes registrados"
    : ingredients.map((item, index) => {
        const handleRemove = () => {
          ingredients.splice(index, 1)
          handleDishesChange()
        }

        return (
          <Ingredient
            key={index}
            ingredient={item}
            handleDishesChange={handleDishesChange}
            handleRemove={handleRemove}
          ></Ingredient>
        )
      })

const DishContainer = ({ dish, handleDishesChange, handleRemove }) => {
  const [title, setTitle] = useState(dish.title)
  const [mode, setMode] = useState("edit")

  const handleAddIngredient = () => {
    dish.ingredients.push(createIngredient())
    handleDishesChange()
  }

  const handleTitleChange = (e) => {
    const newValue = e.target.value
    setTitle(newValue)
    handleDishesChange()
  }

  const handleSaveTitle = () => {
    setMode("saved")
  }

  const handleEditTitle = () => {
    setMode("edit")
  }

  const renderTitle = () => {
    return mode === "edit" ? (
      <div className="inline">
        <input value={title} onChange={handleTitleChange} autoFocus={true} />
        <OptionButton onClick={handleSaveTitle}>Guardar</OptionButton>
      </div>
    ) : (
      <div className="inline">
        <h3 onClick={handleEditTitle}>{title}</h3>
      </div>
    )
  }

  return (
    <Container className="delete-container">
      {renderTitle()}
      <IngredientsContainer>
        {renderIngredients(dish.ingredients, handleDishesChange)}
      </IngredientsContainer>
      <OptionButton onClick={handleAddIngredient}>Nuevo Ingrediente</OptionButton>
      <TiDelete className="delete-button" onClick={handleRemove} />
    </Container>
  )
}

export default DishContainer
