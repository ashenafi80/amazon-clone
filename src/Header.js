import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_SearchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
        <div  onClick={handleAuthenticaton} className="header_option">
          <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header_optionLineTow">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTow">& Orders</span>
        </div>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTow">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
