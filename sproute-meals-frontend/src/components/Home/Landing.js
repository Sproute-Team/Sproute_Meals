import React from "react";
import Navbar from "./Components/Navbar";
import "./Landing.css";
import LogoName from "../images/sprouteMeals.png"
import LeftBar from "./Components/Leftbar";
import Middlemain from "./Components/Middlemain";


function Landing() {
    return (
        <>
            <div className="main overflow-hidden">
                <div className="nav h-24 flex">
                    <div className="m-0 p-0 box-border">
                        <img className="h-24" src={LogoName} alt="The logo name for sproute" />
                    </div>
                    <Navbar />
                    <LeftBar />
                </div>
                <div className="main-down">
                    <Middlemain />
                </div>
            </div>
        </>
    );
}

export default Landing;