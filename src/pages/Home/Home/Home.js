import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeTopBanner></HomeTopBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;