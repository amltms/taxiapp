import DriverCard from '../components/driver/DriverCard';
import { drivers } from '../api/drivers';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Driver } from '../types';

const Layout = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Drivers = () => {
	const [ordering, setOrdering] = useState('');
	const [driversList, setDriversList] = useState<Driver[]>(drivers);

	useEffect(() => {
		// an axios request can be made here to fetch the drivers from the backend in whichever order is required
		// axios.get('http://localhost:3000/drivers/asc').then((res) => setDriversList(res.data));
		if (ordering === 'asc') {
			setDriversList([...drivers].sort((a, b) => (a.lastName > b.lastName ? 1 : -1)));
		} else if (ordering === 'desc') {
			setDriversList([...drivers].sort((a, b) => (a.lastName > b.lastName ? -1 : 1)));
		} else {
			setDriversList(drivers);
		}
	}, [ordering]);

	return (
		<>
			<select onChange={(e) => setOrdering(e.target.value)}>
				<option value="all">All</option>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
			<Layout>
				{driversList.map((driver) => (
					<DriverCard key={driver.id} driver={driver} />
				))}
			</Layout>
		</>
	);
};

export default Drivers;
