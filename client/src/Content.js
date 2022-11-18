import React from 'react';

const Content = (props) =>{

    return(
        <div class = "content-wrapper">
        <h2>
           {props.title}
        </h2>
        <p>
        <a href="https://github.com/SOASTA/boomerang">Boomerang</a>is a JavaScript library for real user monitoring (commonly called RUM).

Boomerang measures the performance characteristics of real-world page loads and interactions.

The documentation here is for mPulse's Boomerang. <a hre = "https://akamai.github.io/boomerang/akamai/">General API documentation for Boomerang.</a>
        </p>
        </div>
    )
}

export default Content