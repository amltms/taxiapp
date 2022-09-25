import { users } from '../api/users';
import styled from 'styled-components';
import Table from '../components/Table';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	table {
		width: 100%;
		text-align: left;
		td {
			padding: 1rem 0.5rem;
		}
		tr:nth-child(even) {
			background-color: #f2f2f2;
		}
		th {
			font-size: 1.5rem;
			padding: 1rem 0.5rem;
			background-color: #04aa6d;
			color: white;
		}
	}
`;

const UsersList = () => {
	return (
		<Container>
			<Table>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
				</tr>
				{users.map((user) => (
					<tr>
						<td>{user.id}</td>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
					</tr>
				))}
			</Table>
		</Container>
	);
};

export default UsersList;
