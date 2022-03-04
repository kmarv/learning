import React, { useState } from 'react';

const Example = () => {
const [state, setState] = useState('');
const [index, setIndex] = useState(1);
	
const handler = (event) => {
	// changing the state to the name of the key
	// which is pressed
	setState(event.key);
    state === "ArrowRight" ? console.log( index + 1 ): console.log( index - 1 )
};
	
return (
	<div>
	<h1>Hi Geeks!</h1>
		
<p>Key pressed is: {state}</p>

		
	{/* Passing the key pressed to the handler function */}
	<input type="text" onKeyDown={(e) => handler(e)} />
		
	</div>
);
};

export default Example;
