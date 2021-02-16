// Dependencies
import React from "react";
import { Helmet } from "react-helmet"

// Styles
import "./leaderboard.scss";

const Leaderboard = () => {
    return (
        <>
            <Helmet>
                <title>Leaderboard</title>
            </Helmet>
            
            <div className="container">
                <h3>Leaderboard</h3>
            </div>
        </>
    );
}

export default Leaderboard;