import styled from 'styled-components';

export const CardContainer = styled.div`
	border: solid brown;
	display: flex;
	flex-flow: row wrap;
	margin: 20px;
	justify-content: space-around;
	border-radius: 15px;
	background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
`;

export const HomeDiv = styled.div`
	display: flex;
	flex-direction: column;

	/* zona searchBar */
	.search {
		border-radius: 15px;
		background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
		border: solid brown;
		display: flex;
		margin: 25px 25px;
	}
	.filtro {
		display: flex;
		align-items: center;
		margin: 15px;
	}

	/* botones paginado */
	.homeButton {
		border: solid blue;
		margin: auto;
	}

	.btn {
		background: #3498db;
		margin: 10px;
		border-radius: 15px;
		font-family: Arial;
		color: #ffffff;
		font-size: 15px;
		padding: 8px 15px 8px 15px;
		text-decoration: none;
	}
	.btn:hover {
		background: #3cb0fd;
		text-decoration: none;
	}
`;
