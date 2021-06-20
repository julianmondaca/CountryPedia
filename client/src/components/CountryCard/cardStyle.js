import styled from 'styled-components';

export const CardDiv = styled.div`
	border: 5px double rgba(164, 19, 12, 0.18);
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 15px 10px;
	width: 200px;

	.styledImg {
		margin: 10px 20px;
		width: 150px;
		height: 100px;
		border: solid pink;
		border-radius: 15px;
	}
	.styleTxt {
		border: solid green;
		margin: 10px 0;
		font-size: 1.2rem;
	}
`;
