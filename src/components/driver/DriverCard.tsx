import styled from 'styled-components';
import { Driver } from '../../types';
import { useNavigate } from 'react-router-dom';

type Props = {
	driver: Driver;
};

const Card = styled.div`
	padding: 1rem;
	margin: 1rem;
	background: #ececec;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	img {
		width: 300px;
		height: 300px;
	}
	:hover {
		background: #c9c9c9;
	}
`;

const DriverCard = ({ driver }: Props) => {
	let navigate = useNavigate();
	return (
		<Card onClick={() => navigate(`/driver/${driver.id}`)}>
			<h1>
				{driver.firstName} {driver.lastName}
			</h1>
			<img src={driver.profileImg} alt={driver.firstName} />
		</Card>
	);
};

export default DriverCard;
