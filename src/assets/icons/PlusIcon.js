import React from 'react';

const svg = {
  arrow: 'M1440.553,130.4l5.552,6.256,5.552-6.256'
};

const PlusIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19.172" height="19.172" viewBox="0 0 19.172 19.172">
    <g id="구성_요소_2_1" data-name="구성 요소 2 – 1" transform="translate(2 2)">
      <g id="그룹_53" data-name="그룹 53" transform="translate(7.586) rotate(45)">
        <path id="패스_12" data-name="패스 12" d="M10.728,0,0,10.728" transform="translate(10.728 0) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
        <path id="패스_13" data-name="패스 13" d="M3267.058,1438l-10.728,10.728" transform="translate(-3256.33 -1438)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

export default PlusIcon;
