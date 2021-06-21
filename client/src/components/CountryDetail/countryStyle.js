import styled from 'styled-components';

export const DetailStyle = styled.div`
	border: solid green;
	background-color: rgb(110, 33, 66);

	img {
		width: 450px;
		height: 250px;
	}

	.infoContainer {
		background-color: rgb(148, 56, 85);
		border-radius: 15px;
		border: 5px double rgba(164, 19, 12, 0.18);
		margin: 50px;
		/* border: solid brown; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.alternative {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.altButton {
		border: 0px;
		margin-left: 15px;
		font-size: 15px;
		background-color: rgb(148, 56, 85);

		&:hover {
			padding: 10px;
			color: white;
			background-color: #aea7c4;
			transform: scale3d(-2);
			transition: all 300ms;
		}
	}
`;
