import styled from 'styled-components';

export const FormStyle = styled.div`
	/* border: solid green; */
	height: 45.2rem;
	background-color: rgb(255, 255, 255);

	.h22 {
		text-align: center;
	}

	.error {
		border: solid red;
	}
	.formDiv {
		/* box-shadow: 5px -4px 62px 16px rgba(34, 34, 34, 0.6); */
		background-color: white;
		border: 5px double rgba(164, 19, 12, 0.18);
		border-radius: 15px;
		padding-top: 50px;
		padding-bottom: 50px;
		margin: 10px 15px 10px 15px;
		padding-left: 25px;
		padding-right: 25px;

		display: flex;
		flex-direction: column;
		margin-top: 30px;
	}
	.principalForm {
		display: flex;
		flex-direction: column;
	}
	.subButton {
		margin-top: 30px;
		border-radius: 15px;
		padding: 10px 0 10px 5px;
		background: rgb(225, 99, 99);

		&:hover {
			background: #197a1a;
			opacity: 1;
			transition: all 300ms;
			padding: 15px;
			font-size: 15px;
			color: white;
		}
	}
	.butonFalse {
		margin-top: 30px;
		border-radius: 15px;
		padding: 10px 0 10px 5px;
		background: rgb(188, 188, 188);
		cursor: not-allowed;
	}
`;
