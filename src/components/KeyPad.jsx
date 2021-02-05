import React from 'react';
const keyPad = props => {
	const { onClick } = props;
	return (
		<section className='buttons'>
			<div className='row'>
				<button name='1' onClick={(e) => onClick(e.target.name)}>1</button>
				<button name='2' onClick={(e) => onClick(e.target.name)}>2</button>
				<button name='3' onClick={(e) => onClick(e.target.name)}>3</button>
				<button name='+' onClick={(e) => onClick(e.target.name)}>+</button>
			</div>
			<div className='row'>
				<button name='4' onClick={(e) => onClick(e.target.name)}>4</button>
				<button name='5' onClick={(e) => onClick(e.target.name)}>5</button>
				<button name='6' onClick={(e) => onClick(e.target.name)}>6</button>
				<button name='-' onClick={(e) => onClick(e.target.name)}>-</button>
			</div>
			<div className='row'>
				<button name='7' onClick={(e) => onClick(e.target.name)}>7</button>
				<button name='8' onClick={(e) => onClick(e.target.name)}>8</button>
				<button name='9' onClick={(e) => onClick(e.target.name)}>9</button>
				<button name='*' onClick={(e) => onClick(e.target.name)}>x</button>
			</div>
			<div className='row'>
				<button name='C' onClick={(e) => onClick(e.target.name)}>C</button>
				<button name='0' onClick={(e) => onClick(e.target.name)}>0</button>
				<button name='=' onClick={(e) => onClick(e.target.name)}> =</button>
				<button name='/' onClick={(e) => onClick(e.target.name)}>÷</button>
			</div>
		</section>
	);
};
export default keyPad;
