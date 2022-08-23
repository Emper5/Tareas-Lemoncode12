import React from "react";

export const App = () => {

    const url = process.env.API_BASE ? process.env.API_BASE : '';

    return (<>
        <h1> Hello World </h1>
        <div > Port from enviroment : {url}</div>
        </>
    );


};