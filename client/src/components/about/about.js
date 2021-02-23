// Dependencies
import React from "react";
import { Helmet } from "react-helmet"

// Styles
import "./about.scss"

const About = () => {
    return (
        <>
            <Helmet>
                <title>Todoist | About</title>
            </Helmet>
            
            <div className="container">
                <h3>About</h3>
            </div>
        </>
    );
}

export default About;