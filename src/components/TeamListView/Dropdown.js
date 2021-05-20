import React, { useState } from 'react';


// export const dropdown = (function () {
//   const dropdown = document.getElementById('dropdown');

//   const dropdownButton = document.createElement('div');
//   dropdownButton.className = 'dropdown-button';
//   dropdownButton.innerHTML = 'Dropdown';
//   dropdown.appendChild(dropdownButton);

//   const dropdownBox = document.createElement('div');
//   dropdownBox.className = 'dropdown-box';
//   dropdown.appendChild(dropdownBox);

//   for (let i = 0; i < 3; i++) {
//     const dropdownItem = document.createElement('a');
//     dropdownItem.className = 'dropdown-item';
//     dropdownItem.innerHTML = `item ${i}`;
//     dropdownBox.appendChild(dropdownItem);
//   }

//   dropdownButton.addEventListener('click', (event) => {
//     event.currentTarget.classList.toggle('active');
//     dropdownBox.classList.toggle('active');
//   });
// }());
// import React from 'react'

// export default function Dropdown() {
// 	return (
// 		<div>
			
// 		</div>
// 	)
// }


export function Dropdown() {

	const [isActive, setisActive] = useState(false);

	const onClick = (event) => {
		event.currentTarget.classList.toggle('active');
	}

	return (
		<button className='dropdown-button' type='button'>
			Subject
			{/* <div className={classnames('dropdown-box', {'dropdown-active': isActive})}>libft</div>
			<div className={classnames('dropdown-box', {'dropdown-active': isActive})}>get-next-line</div>
			<div className={classnames('dropdown-box', {'dropdown-active': isActive})}>printf</div> */}
		</button>
	);
}