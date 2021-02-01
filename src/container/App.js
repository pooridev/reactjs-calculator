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
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>+</div>
				</div>
				<div className='row'>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>-</div>
				</div>
				<div className='row'>
					<div>7</div>
					<div>8</div>
					<div>9</div>
					<div>x</div>
				</div>
				<div className='row'>
					<div>C</div>
					<div>0</div>
					<div> =</div>
					<div>÷</div>
				</div>
			</section>
		</main>
	);
};

export default calculator;
