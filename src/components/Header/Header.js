import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled, { Logout } from './Header.styles';
import { ReactComponent as Logo } from '../../assets/images/42_logo.svg';
import { UserImageStyled } from '../TeamListItem/common/TeamImage/TeamImage.styles';

const Header = props => {
  const { user } = props;
	const [logState, setlogState] = useState(false);

	const logoutWindowManage = () => {
		setlogState(!logState);
	};

	const FuncLogout = () => {
		console.log("Logout");
	}

  return (
		<HeaderStyled>
			<div className="logo">
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<HeaderStyled.Image>
				{user && <UserImageStyled onClick={logoutWindowManage} key={1} size="big" url={`https://cdn.intra.42.fr/users/small_${user.nickname}.jpg`} />}
			</HeaderStyled.Image>
			<Logout logState={logState}>
				<div className="bubble">
					<Logout.UserWrap>
						<UserImageStyled size="big" url={`https://cdn.intra.42.fr/users/small_${user.nickname}.jpg`}/>
						<Logout.UserInfo>
							<h2>{ user.nickname }</h2>
							<p>
								Level 2 - 30% | {user.blackhole} days left
							</p>
						</Logout.UserInfo>
					</Logout.UserWrap>
					<Logout.Button onClick={FuncLogout}>로그아웃</Logout.Button>
				</div>
			</Logout>
		</HeaderStyled>
  );
};

export default Header;
