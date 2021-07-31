import styled from 'styled-components';

export const StyledNavBar = styled.div`
	background-color: rgb(180, 180, 180);

	display: flex;
	align-items: center;
	justify-content: space-around;
	.buttons {
		display: flex;
		/* border: solid green; */
		padding: 30px;
		justify-content: space-around;
	}
	.btnNav {
		border: 0px;
		margin-left: 15px;
		font-size: 15px;
		background-color: rgb(180, 180, 180);

		&:hover {
			padding: 10px;
			color: white;
			background-color: #aea7c4;
			transform: scale3d(-2);
			transition: all 300ms;
		}
	}
`;
