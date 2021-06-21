import styled from 'styled-components';

export const LogoStyled = styled.nav`
  margin-top: 4px;
`;

const HeaderStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #252831;
  font-size: 28px;
  z-index: 1;

  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    color: #fff;
  }
  .logo {
    width: 50px;
    height: 50px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

HeaderStyled.Image = styled.div`
	cursor: pointer;
`;

export const Logout = styled.div`
 	display: ${ props => props.isVisible === false ? "none" : "block" };
	position: absolute;
	top: 75px;
	right: 34px;

	.bubble {
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 25px 30px;
		background: #ffffff;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
		border: #27babb solid 1px;
	}

	.bubble:after {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 0 8px 16px;
		border-color: #ffffff transparent;
		display: block;
		width: 0;
		z-index: 1;
		top: -15px;
		left: 229px;
	}

	.bubble:before {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 0 9px 18px;
		border-color: #27babb transparent;
		display: block;
		width: 0;
		z-index: 0;
		top: -18px;
		left: 228px;
	}
`;

Logout.UserWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-bottom: 10px;
	border-bottom: 2px solid #f9f9f9;
`;

Logout.UserInfo = styled.div`
	margin-left: 10px;

	h2 {
		font-weight: bold;
		font-size: 0.6em;
		margin-bottom: 8px;
	}

	p {
		color: #7c7e83;
		font-size: 0.4em;
	}
`;

Logout.Button = styled.div`
	color: #7c7e83;
	font-size: 0.5em;
	margin-top: 20px;
	padding-left: 5px;
	transition: .2s;
	cursor: pointer;

	:hover {
		color: #252831;
	}
`;

export default HeaderStyled;
