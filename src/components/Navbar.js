import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import {ButtonContainer} from './Button';

export default class App extends Component {
  render()
  {
    return (

    	//bootstrap is here that's why can use tag as nav otherwise there is no such tag.
       <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
       		 {
       		 	/* 
				https://www.iconfinder.com/icons/1243689/call_phone_icon
				Creative Commons (Attribution 3.0 Unported);
				https://www.iconfinder.com/Makoto_msk */
       		 }
       		 <Link	to='/'>
       		 	<img src={logo} alt="store" className="navbar-brand" />
       		 </Link>

       		 <ul className="navbar-nav align-items-center"> 
       		 	<li className="nav-item ml-5"> 
       		 		<Link to="/" className="nav-link">
       		 			products
       		 		</Link>
       		 	</li>
       		 </ul>

       		{/*buttoncontainer look at line 43 we made custome css. */}
       		 <Link to='/cart' className="ml-auto">
       			<ButtonContainer>
       				<i className="fas fa-cart-plus" />
       				my cart
       			</ButtonContainer>
       		 </Link>
       </NavWrapper>
      );
  }
}

//*** made seprate file button.js that contains all styles ***//

// //to prevent some hard css. use styled-components here. so we can write down like below.
// const ButtonContainer = styled.button`
// 	text-transform:capitalize;
// 	font-size:1.4rem;
// 	background:transparent;
// 	border:0.05rem solid var(--lightBlue);
// 	color:var(--lightBlue);
// 	border-radius:0.5rem;
// 	padding:0.2rem o.5rem;
// 	curser:pointer;
// 	margin:0.2rem 0.5rem 0.2rem 0;
// 	transition:all 0.5s ease-in-out;
// 	&:hover{
// 		background:var(--lightBlue);
// 		color:var(--mainBlue);
// 	}
// 	&:focus{
// 		outline: none;
// 	}
// `;

const NavWrapper = styled.nav`
	background:var(--mainBlue);
	.nav-link{
		color:var(--mainWhite) !important;
		font-size:1.3rem;
		text-transform:capitalize;
	}
  `;