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
					add={() => props.ingredientsAdded(item.type)} 
					del={props.ingredientsRemove}
				/>
			))}
		</div>
	)
}


export default BuildControls;