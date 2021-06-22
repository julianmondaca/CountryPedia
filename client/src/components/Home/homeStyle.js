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
	background-color: rgb(148, 56, 85);
	box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
	-webkit-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
	-moz-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
`;

export const HomeDiv = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgb(110, 33, 66);
	/* zona searchBar */
	.search {
		box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
		-webkit-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
		-moz-box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6);
		border-radius: 15px;
		background-color: rgb(148, 56, 85);
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
		background-color: rgb(148, 56, 85);
		border-radius: 15px;
		margin: auto;
	}

	.btn {
		background: rgb(225, 99, 99);
		margin: 10px;
		border-radius: 15px;
		color: #ffffff;
		font-size: 15px;
		padding: 8px 15px 8px 15px;
		text-decoration: none;
	}
	.btn:hover {
		background: #aea7c4;
	}
`;
