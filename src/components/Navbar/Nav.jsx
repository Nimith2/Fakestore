import React from "react";
// import { Link } from "react-router-dom";
import "../Styling/Style.css"
export default class Nav extends React.Component {
    render() {
        return (
            <>

                <nav>
                    <div className="logo"><h1 id="logo">ShopSphere</h1></div>
                    <div id="items">
                        <ul>
                            <li>Home</li>
                            <li>Profile</li>
                            <li><button id="loginbtn">Login</button></li>
                            <button style={{ backgroundColor: "#343a40", border: "none", padding: "13px 15px",position:"relative",right:"40px",bottom:"6px" }}>
                                <i className="fa-solid fa-cart-arrow-down fa-2xl" style={{ color: "white" }}></i>
                            </button>

                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}