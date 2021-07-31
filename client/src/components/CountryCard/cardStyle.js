import styled from 'styled-components';

export const CardDiv = styled.div`
	border: 5px solid black;
	border-width: 3px;
	/* rgba(164, 19, 12, 0.18); */
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 15px 10px;
	width: 200px;
	height: 284px;

	.styledImg {
		margin: 10px 23px;
		width: 150px;
		height: 100px;
		border: solid rgba(0, 0, 0, 75);
		border-width: 2px;
		border-radius: 15px;
	}
	.styleTxt {
		/* border: solid green; */
		margin: 10px 5px;
		font-size: 1.2rem;
	}

	&:hover {
		background-color: #aea7c4;
		transform: scale3d(-1);
		transition: all 1s;
	}
`;
