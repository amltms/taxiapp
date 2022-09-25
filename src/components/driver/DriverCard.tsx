import styled from 'styled-components';
import { Driver } from '../../types';
import { useNavigate } from 'react-router-dom';

type Props = {
	driver: Driver;
};

const Card = styled.div`
	padding: 2rem;
	border-radius: 2rem;
	margin: 1rem;
	background: #ececec;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: 0.3s;
	cursor: pointer;
	img {
		width: 300px;
		height: 300px;
	}
	:hover {
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.4);
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
