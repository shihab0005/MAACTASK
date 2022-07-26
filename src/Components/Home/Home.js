import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Partner from '../Partner/Partner';
import Product from '../Product/Product';
import Question from '../Question/Question';
import Success from '../Success/Success';

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <Product />
            <About />
            <Success />
            <Question />
            <Partner />
            <Footer />
        </>
    );
};

export default Home;