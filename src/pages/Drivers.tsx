import DriverCard from '../components/driver/DriverCard';
import { drivers } from '../api/drivers';
import styled from 'styled-components';

const Layout = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Drivers = () => {
	return (
		<>
			<select>
				<option value="all">All</option>
				<option value="active">Active</option>
				<option value="inactive">Inactive</option>
			</select>
			<Layout>
				{drivers.map((driver) => (
					<DriverCard key={driver.id} driver={driver} />
				))}
			</Layout>
		</>
	);
};

export default Drivers;
