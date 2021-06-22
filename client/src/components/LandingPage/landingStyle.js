import styled from 'styled-components';
import img from '../../media/img.jpg';

export const LandingDiv = styled.div`
	background-image: src('../../media/img.jpg');
	/* border: solid red; */
	padding: 50px;
	height: 34.5rem;
	display: flex;
	flex-direction: column;

	.nameDiv {
		/* border: solid red; */
		position: absolute;
		bottom: 5px;
		color: gray;
	}

	.landingBtn {
		padding: 15px;
		background-color: rgba(176, 176, 176, 0.5970763305322129);
		border: 0;
		&:hover {
			color: white;
			background-color: rgb(148, 56, 85);
			transition: all 750ms;
			border-radius: 15px;
		}
	}
	.link {
		/* border: solid gray; */
		position: absolute;
		left: 15px;
		top: 15px;
	}

	h1 {
		/* color: #943855; */
		text-align: center;
		/* border: solid red; */
		height: 100px;
	}
`;
