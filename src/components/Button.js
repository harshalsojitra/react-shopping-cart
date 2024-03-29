import styled from 'styled-components';

//to prevent some hard css. use styled-components here. so we can write down like below.
export const ButtonContainer = styled.button`
	text-transform:capitalize;
	font-size:1.4rem;
	background:transparent;
	border:0.05rem solid var(--lightBlue);
	color:var(--lightBlue);
	border-radius:0.5rem;
	padding:0.2rem o.5rem;
	curser:pointer;
	margin:0.2rem 0.5rem 0.2rem 0;
	transition:all 0.5s ease-in-out;
	&:hover{
		background:var(--lightBlue);
		color:var(--mainBlue);
	}
	&:focus{
		outline: none;
	}
`;