import React from "react";
import logo from '../assets/holberton_logo.jpg';
import './Header.css';
import {css, stylesheet } from "aphrodite";
function Header() {
    return(
        <div className={css(styles.AppHeader)}>
            <img src={logo} alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}


const styles = StyleSheet.create({
    AppHeader: {
        fontSize: "1.4rem",
        color: "#e0354b",
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #e0354b",
    },

    img: {
        width: "200px",
        height: "200px",
    },
    });
export default Header;

