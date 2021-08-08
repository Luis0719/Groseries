import { React } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 50vw;
`

const IngredientsContainer = styled.ul``

const Ingredient = styled.li``

const summarizeIngredients = (dishes) => {
  return dishes.reduce((result, dish) => {
    dish.ingredients.forEach((item) => {
      const key = item.name + item.unit
      if (!result[key]) {
        result[key] = {
          name: item.name,
          amount: +item.amount,
          unit: item.unit,
        }

        return
      }

      result[key].amount += +item.amount
    })

    return result
  }, {})
}

const renderIngredients = (dishes) => {
  const ingredients = Object.values(summarizeIngredients(dishes))

  if (ingredients.length === 0) {
    return "Sin ingredientes registrados"
  }

  return Object.values(ingredients)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item, index) => (
      <Ingredient key={index}>
        {item.amount} {item.unit} de {item.name}
      </Ingredient>
    ))
}

const Summary = ({ dishes }) => {
  return (
    <Container>
      <h1>Resumen</h1>
      <IngredientsContainer>{renderIngredients(dishes)}</IngredientsContainer>
    </Container>
  )
}

export default Summary
