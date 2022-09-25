import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Table from '../components/Table';
import { rides } from '../api/rides';
import { drivers } from '../api/drivers';
import { Ride, Driver } from '../types';

const Container = styled.div`
	overflow: hidden;
	position: relative;
`;

const Profile = styled.div`
	img {
		width: 300px;
		height: 300px;
	}
	h1 {
		margin-top: 1rem;
	}
	padding: 5rem 0;
`;

export const DriverProfile = () => {
	const { id } = useParams();
	const [filteredRides, setFilteredRides] = useState<Ride[]>([]);
	const [driver, setDriver] = useState<Driver>();

	useEffect(() => {
		setDriver(drivers.find((driver) => driver.id === id));

		// if this was from the backend, we would populate the vehicles with registration number and users with user id
		setFilteredRides(rides.filter((ride) => ride.driverId === id));
	}, [id]);

	return (
		<Container>
			{driver && (
				<Profile>
					<img src={driver.profileImg} alt={driver.firstName} />
					<h1>
						{driver.firstName} {driver.lastName}
					</h1>
				</Profile>
			)}

			<h1>Rides</h1>
			<Table>
				<tr>
					<th>ID</th>
					<th>Date</th>
					<th>Vehicle Registration Number</th>
					<th>User ID</th>
				</tr>
				{filteredRides.map((ride) => (
					<tr>
						<td>{ride.id}</td>
						<td>{ride.date}</td>
						<td>{ride.registrationNumber}</td>
						<td>{ride.userId}</td>
					</tr>
				))}
			</Table>
		</Container>
	);
};
