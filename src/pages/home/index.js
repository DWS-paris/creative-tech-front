import React from 'react';
import HomeButton from '../../components/HomeButton/index';
import HomeBadge from '../../components/HomeBadge/index';

const Home = () => 
    <section className="home-section">
        <HomeBadge name="Badge pour émarger"></HomeBadge>
        <HomeButton name="La question de la semaine" route="/answer-question"></HomeButton>
    </section>;

export default Home;