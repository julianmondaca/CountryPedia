import styled from 'styled-components';

export const CardContainer = styled.div`
	/* border: solid brown; */

	width: 1303px;
	display: flex;
	flex-flow: row wrap;
	margin: 20px;
	justify-content: space-around;
	border-radius: 15px;
	/* background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea); */
	/* background-color: rgb(148, 56, 85); */
	/* background-color: rgb(180, 180, 180);
	box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
	-webkit-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
	-moz-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6); */
`;

export const HomeDiv = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgb(255, 255, 255);
	/* zona searchBar */

	.countriesH2 {
		text-align: center;
	}

	.search {
		/* box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
		-webkit-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
		-moz-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6); */
		border-radius: 15px;
		border: solid rgb(180, 180, 180);
		/* background-color: rgb(180, 180, 180); */
		/* border: solid brown; */
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
		border: solid black;
		border-width: 2px;

		border-radius: 15px;
		margin: auto;
	}

	.btn {
		color: black;
		background-color: white;
		margin: 10px;
		border-radius: 15px;
		color: black;
		font-size: 15px;
		padding: 8px 15px 8px 15px;
		text-decoration: none;
	}
	.btn:hover {
		background: #aea7c4;
	}
`;
