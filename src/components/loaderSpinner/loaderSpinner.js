import React from 'react'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrap = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const loaderSpinner = () => (
	<LoaderWrap>
		<Loader 
			type="Oval"
			color="#3d66ba"
			width={30}
			height={30}
			timeout={10000}
		/>
	</LoaderWrap>
);

export default loaderSpinner;
