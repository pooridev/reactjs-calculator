import React from 'react';
import './App.css';

const calculator = () => {
	return (
		<main className='calculator-wrapper'>
			<section className='result-wrapper'>
				<p className='result'></p>
			</section>
			<section className='buttons'>
				<div className='row'>
					<div onClick='enterNumber(this)'>1</div>
					<div onClick='enterNumber(this)'>2</div>
					<div onClick='enterNumber(this)'>3</div>
					<div onClick='operation(this)'>+</div>
				</div>
				<div className='row'>
					<div onClick='enterNumber(this)'>4</div>
					<div onClick='enterNumber(this)'>5</div>
					<div onClick='enterNumber(this)'>6</div>
					<div onClick='operation(this)'>-</div>
				</div>
				<div className='row'>
					<div onClick='enterNumber(this)'>7</div>
					<div onClick='enterNumber(this)'>8</div>
					<div onClick='enterNumber(this)'>9</div>
					<div onClick='operation(this)'>x</div>
				</div>
				<div className='row'>
					<div onClick='clearOperation(this)'>C</div>
					<div onClick='enterNumber(this)'>0</div>
					<div onClick='equal(this)'>=</div>
					<div onClick='operation(this)'>÷</div>
				</div>
			</section>
		</main>
	);
};

export default calculator;
