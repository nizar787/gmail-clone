import React from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {logout} from "./features/userSlice";
import {auth} from "./Firebase";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(()=> {
            dispatch(logout());
        })

    };

    return (
        <div className='header'>

          <div className="header__left">
              <IconButton>
                  <MenuIcon/>
              </IconButton>
              <img
               src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
              />
          </div>

          <div className="header__middle">
              <SearchIcon/>
              <input placeholder="Search mail" type="text"/>
              <ArrowDropDownIcon className="header__inputCaret"/>
          </div>

          <div className="header__right">
              <IconButton>
                  <AppsIcon/>
              </IconButton>

              <IconButton >
                  <NotificationsIcon/>
              </IconButton>
              <Avatar onClick={signOut} src={user?.photoURL}/>
          </div>

        </div>
    );
}

export default Header;