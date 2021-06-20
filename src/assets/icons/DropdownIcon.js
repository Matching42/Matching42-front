import React from 'react';

const svg = {
  arrow: 'M1440.553,130.4l5.552,6.256,5.552-6.256'
};

const DropdownIcon = ({ color, active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13.928" height="8.668" viewBox="0 0 13.928 8.668">
    <path id="패스_11" data-name="패스 11" d="M1440.553,130.4l5.552,6.256,5.552-6.256" transform={active} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export default DropdownIcon;

/*
<svg xmlns="http://www.w3.org/2000/svg" width="13.928" height="8.668" viewBox="0 0 13.928 8.668">
  <path id="패스_11" data-name="패스 11" d="M1440.553,130.4l5.552,6.256,5.552-6.256" transform="translate(1453.069 137.659) rotate(180)" fill="none" stroke="#27babb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>

*/
