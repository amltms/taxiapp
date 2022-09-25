import { useState } from 'react';
import styled from 'styled-components';
import { rides } from '../api/rides';
import { drivers } from '../api/drivers';
import { Ride, Driver } from '../types';
import DriverCard from '../components/driver/DriverCard';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	h3 {
		margin-top: 2rem;
	}
`;

const Form = styled.form`
	margin-top: 2rem;
`;

const Search = () => {
	const [date, setDate] = useState('');
	const [registration, setRegistration] = useState('');
	const [driver, setDriver] = useState<Driver>();

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const filteredRide: Ride | undefined = rides.find((ride) => ride.date === date && ride.registrationNumber === registration);
		setDriver(drivers.find((driver) => driver.id === filteredRide?.driverId));
		console.log(driver);
	};
	return (
		<Container>
			<h1>Search for a driver by date and registration number</h1>
			<h3>Example</h3>
			<p>
				<b>Date:</b> 2022-09-18
				<br />
				<b>Registration Number:</b> KJ1234
			</p>
			<Form onSubmit={onSubmit}>
				<input type="date" onChange={(e) => setDate(e.target.value)} />
				<input placeholder="Registration Number" onChange={(e) => setRegistration(e.target.value)} />
				<button type="submit">Search</button>
			</Form>
			{driver && <DriverCard driver={driver} />}
		</Container>
	);
};

export default Search;
