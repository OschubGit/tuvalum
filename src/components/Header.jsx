import React, { useContext } from "react";
import Logo from "./Logo";
import logo from "../logo.svg";
import { CartContext } from "../utils/context/cartContext";
import {FiShoppingCart} from "react-icons/fi"
import Button from "./Button";

const Header = () => {
  const ctx = useContext(CartContext);
  return (
    <div className="layout__header">
        <Logo data-testid="header-logo" width="150px" logo={logo} alt="logo" />
        <div className="layout__header-menu">
            <Button type="button" className="cButton cButton-outlined" onClick={ctx.activeMenu} icon={<FiShoppingCart/>}>
                Cesta
            </Button>
        </div>
    </div>
  );
};

export default Header;
