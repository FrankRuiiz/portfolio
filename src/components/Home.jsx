import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import ShowProjectThumb from './ShowProjectThumb';

import phone_icon from '../img/phone.svg';
import email_icon from '../img/email.svg';

const Home = props => {
  return (
    <div>
      <Nav />
      <div className="header header--paralax">
        <div className="header__overlay" />
        <div className="header__inner container">
          <div className="header__content">
            <h1>
              I'm Frank Ruiz, a Frontend Developer from Southern California. I
              help businesses achieveh their goals by converting concepts into
              code.
            </h1>
            <div className="header__work-line">
              <div className="header__vertical-line" />
              <h4>See My Work</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="work container">
        <div className="work__inner work__row">
          {props.projects.map(project => (
            <ShowProjectThumb key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div className="about container">
        <div className="about__inner">
          <div className="about__left">
            <h2>About</h2>
            <p>
              I am currently working with a digital markting company named
              530Medialab located in Cypress, CA. Our team builds and maintains
              sites on a variety of platforms such as: Magento 1-2,
              Wordpress/WooCommerce, and Shopify. Aside from working witin these
              environments, some of my technical skills include: PHP, Liquid,
              JavaScript/JQuery/React, HTML/5 and CSS/SCSS and more!
            </p>
          </div>
          <div className="about__right">
            <div className="right__inner">
              <h2>Contact</h2>
              <p>
                Currently I am seeking other opportunities to work with React.js
                based projects. Please feel free to contact me below with
                details. Thanks!
              </p>
              <p>
                <a href="mailto:frank.ruiz.limon@gmail.com">
                  <span className="icon">
                    <img src={phone_icon} alt="Email" />
                  </span>{' '}
                  frank.ruiz.limon@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:19517337896">
                  <span className="icon">
                    <img src={email_icon} alt="phone" />
                  </span>{' '}
                  951-733-7896
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;