import React from 'react';
import Result from '../components/Result';
import KeyPad from '../components/KeyPad';
import './App.css';

const calculator = () => {
	return (
		<main className='calculator-wrapper'>
			<Result />
			<KeyPad />
		</main>
	);
};

export default calculator;
