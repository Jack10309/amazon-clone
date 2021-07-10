import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
    return (
        <div className='header'>
            <img 
                className="header_logo" 
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                 alt="Amazon logo" 
            />

            <div className="header_search">
                <input 
                type="text" 
                className="header_searchInput" />
                <SearchIcon 
                className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </div>
        </div>
    )
}
