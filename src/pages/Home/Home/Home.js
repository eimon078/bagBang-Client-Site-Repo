import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import DisplayReviews from '../DisplayReviews/DisplayReviews';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeTopBanner></HomeTopBanner>
            <HomeProducts></HomeProducts>
            <DisplayReviews></DisplayReviews>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;