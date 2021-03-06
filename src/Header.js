import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider'
import { auth } from './firebase';

function Header() {
    const [{ basket }]= useStateValue();
    return (
        <nav className="header">
            
            <Link to=''>
                <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/small/amazon_PNG25.png"   
                />
            </Link>

            <div className="header_search">
                <input className='header_searchInput'/>
                <SearchIcon className="header_searchIcon"/>
            </div>


            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo"> Sign In </span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div  className="header_option">
                        <span className="header_optionLineOne">Return</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                        
                    </div>
                </Link>

            </div>


        </nav>
    )
}

export default Header

