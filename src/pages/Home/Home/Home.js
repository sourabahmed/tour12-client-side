import React from 'react';
import Review from '../../Review/Review';
import WhyTour12 from '../../WhyTour12/WhyTour12';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Packages></Packages>
           <WhyTour12></WhyTour12>
           <Review></Review>
        </div>
    );
};

export default Home;