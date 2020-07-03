import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	chesse: 0.5,
	bacon: 0.7,
	salad: 0.4,
	meat: 1.2
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
	}

	removeIngredientHandler = (type) => {
		// const atualCount = this.state.ingredients[type];
		// const updatedCount = atualCount - 1;
		// this.state.ingredients = updatedCount;
	}

	render() {
		return (
			<Aux>
				<div>Burger Builder</div>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientsAdded={this.addIngredientHandler} 
					ingredientsRemove={this.removeIngredientHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;