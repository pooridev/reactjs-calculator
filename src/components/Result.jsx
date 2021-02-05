import React from 'react';
const result = props => {
	const { result } = props;
	return (
		<section className='result-wrapper'>
			<p className='result'>{result}</p>
		</section>
	);
};
export default result;
