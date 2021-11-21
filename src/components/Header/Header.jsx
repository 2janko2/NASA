import { NavLink } from "react-router-dom";

import Search from "../Search/Search";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className={classes.wrapper}>
            <NavLink to="/">
                <div className={classes.logobox}>
                    <h3 className={classes.logoTitle}>NASA Image and Video Library</h3>
                    <img className={classes.logoPicture} src={logo} alt="nasa logo" />
                </div>
            </NavLink>
            <div className={classes.requestPosition}>
                <Search />;
                <div className={classes.navbar}>
                    <li> Wow! </li>
                </div>
            </div>
        </div>
    );
};

export default Header;
