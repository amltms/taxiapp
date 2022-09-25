import { Routes, Route } from 'react-router-dom';
import Drivers from './pages/Drivers';
import Nav from './components/Nav';
import { DriverProfile } from './pages/DriverProfile';
import UsersList from './pages/UsersList';
import styled from 'styled-components';
import Search from './pages/Search';

const Container = styled.div`
	padding: 0 5rem;
`;
function App() {
	return (
		<div className="App">
			<Nav />
			<Container>
				<Routes>
					<Route path="/" element={<Drivers />} />
					<Route path="/driver/:id" element={<DriverProfile />} />
					<Route path="/users" element={<UsersList />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
