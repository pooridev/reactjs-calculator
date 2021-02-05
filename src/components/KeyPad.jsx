import React from 'react';
const keyPad = () => {
	return (
		<section className='buttons'>
			<div className='row'>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>+</button>
			</div>
			<div className='row'>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>-</button>
			</div>
			<div className='row'>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button>x</button>
			</div>
			<div className='row'>
				<button>C</button>
				<button>0</button>
				<button> =</button>
				<button>÷</button>
			</div>
		</section>
	);
};
export default keyPad;