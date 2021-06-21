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
 	display: ${ props => props.logState === false ? "none" : "block" };
	position: absolute;
	top: 85px;
	right: 1px;
	.bubble {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 285px;
		height: 130px;
		padding: 30px 25px;
		background: #FFFFFF;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
		border: #27babb solid 3px;
	}

	.bubble:after {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 0 13px 24px;
		border-color: #FFFFFF transparent;
		display: block;
		width: 0;
		z-index: 1;
		top: -24px;
		left: 223px;
	}

	.bubble:before {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 0 15px 26px;
		border-color: #27babb transparent;
		display: block;
		width: 0;
		z-index: 0;
		top: -29px;
		left: 221px;
	}
`;

Logout.UserWrap = styled.div`
	display: flex;
	width: 100%;
	margin: 10px 0;
	padding-bottom: 20px;
	padding-left: 5px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.11);
`;

Logout.UserInfo = styled.div`
	margin-left: 15px;

	h2 {
		font-weight: bold;
		font-size: 22px;
		margin-bottom: 5px;
	}

	p {
		color: #252831;
	}
`;

Logout.Button = styled.div`
	color: #252831;
	margin-top: 18px;
	padding-left: 5px;
`;

export default HeaderStyled;
