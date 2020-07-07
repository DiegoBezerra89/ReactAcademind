import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const ingredients = [
	{ type:'bacon', label:'Bacon'},
	{ type:'salad', label:'Salad'},
	{ type:'cheese', label:'Cheese'},
	{ type:'meat', label:'Meat'}
];


const BuildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			{ingredients.map(item => (
				<BuildControl
					label={item.label}
					key={item.label} 
					add={() => props.ingredientAdded(item.type)} 
					del={() => props.ingredientRemove(item.type)}
				/>
			))}
		</div>
	)
}


export default BuildControls;