import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	padding: 1.5rem;
	background: black;
	margin-bottom: 4rem;
	a {
		text-decoration: none;
		color: black;
		font-size: 1.5rem;
		color: white;
		:hover {
			color: #04aa6d;
		}
	}
`;
const Nav = () => {
	return (
		<Bar>
			<NavLink to="/">Drivers</NavLink>
			<NavLink to="/users">Users List</NavLink>
			<NavLink to="/search">Search</NavLink>
		</Bar>
	);
};

export default Nav;
