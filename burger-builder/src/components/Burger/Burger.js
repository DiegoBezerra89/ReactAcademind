import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
	
	let transformedIngredients = Object.keys(props.ingredients) //object turned into an array ['salad', 'bacon', 'cheese']
		.map(igKey => { //mapping this created array igKey = 'salad', 'bacon', 'cheese'
		 //1, 1, 2, 2
			return [...Array(props.ingredients[igKey])].map((_, i) => { //spread on an array 
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		},[]);
		if(transformedIngredients.length === 0) {
			transformedIngredients = <p>Please insert some ingredients!</p>
		}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top'/>
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom'/>
		</div>
	);
};

export default Burger;