import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import Phones from "../../Phones/Phones";

const Home = () => {

    const Phones = useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <Phones></Phones>
        </div>
    );
};
export default Home;