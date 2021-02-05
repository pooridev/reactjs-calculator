import React, { useState } from 'react';
import Result from '../components/Result';
import KeyPad from '../components/KeyPad';
import './App.css';

const Calculator = () => {
	const [result, setResult] = useState('');
	const calculate = () => {
		var checkResult = '';
		if (result.includes('--')) {
			checkResult = result.replace('--', '+');
		} else {
			checkResult = result;
		}

		try {
			setResult((eval(checkResult) || '') + '');
		} catch (e) {
			setResult('error');
		}
	};

	const onClick = button => {
		switch (button) {
			case '=':
				calculate();
				break;
			case 'C':
				reset();
				break;
			default:
				setResult(result + button);
				break;
		}
	};
	const reset = () => {
		setResult('');
	};

	return (
		<main className='calculator-wrapper'>
			<Result result={result} />
			<KeyPad onClick={onClick} />
		</main>
	);
};

export default Calculator;
