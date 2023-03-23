import {Fragment} from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
          <h1>ReactTshirt</h1>
          <HeaderCartButton onClick={props.onShow}/> 
          {/* onClick={props.onShow} */}
        </header>
        
      </Fragment>
    );
  };
  export default Header;