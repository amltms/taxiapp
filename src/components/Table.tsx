import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
};

const TableContainer = styled.table`
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
`;

const Table = ({ children }: Props) => {
	return <TableContainer>{children}</TableContainer>;
};

export default Table;
