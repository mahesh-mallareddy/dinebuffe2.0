import React from "react";
import reactDom from "react-dom/client";

const head = React.createElement("p",{ },"ading from react js");
const root = reactDom.createRoot(document.getElementById("root"));

const Logo = () => {
    return (
        <div className="logo">
            <h2>GO-EAT</h2>
        </div>
    )
}
const Navlist = () => {
   
        return (
            <>
                <div >
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>ORDER</li>
                        <li>CONTANCT</li>
                    </ul>
                </div>
                <div className="menu">
                    <h1>=</h1>
                </div>
            </>
        )
    }
    const Nav = () => {
        return (
            <div className="navigation">
                <div className="navbar">
                    <Logo />
                    <Navlist />
                </div>
            </div>
        )
    }

root.render(<Nav/>)