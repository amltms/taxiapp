import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 1rem;
`;
const Search = () => {
	const [date, setDate] = useState('');
	const [registration, setRegistration] = useState('');
	return (
		<Container>
			<input type="date" onChange={(e) => setDate(e.target.value)} />
			<input placeholder="Registration Number" onChange={(e) => setRegistration(e.target.value)} />
			<button>Search</button>
			{registration}
			{date}
		</Container>
	);
};

export default Search;
