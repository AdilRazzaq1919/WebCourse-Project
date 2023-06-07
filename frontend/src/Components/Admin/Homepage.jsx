import React from "react";
import {Link} from "react-router-dom"

import logo from '../Images/1.jpg'
import logo1 from '../Images/4.png'
import logo2 from '../Images/5.png'


import '../Admin/style.css'
const Home = () => {
  return (
    <div className="body">
      <section className="home" id="home">
        <div className="home-text">
          <div className="slide">
            <span className="one">Discover Your Fashion </span>
            <span className="two">Identity with </span>
          </div>
          <h1>Outfitters</h1>
          <h3>
            Live <span>Your Style.</span>
          </h3>
          <p>
          Outfitters is a contemporary fashion brand that offers trendy and stylish clothing and accessories, catering to individuals who seek to express their unique fashion identity with confidence and flair.</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="about-text">
          <h2>About <span>Us</span></h2>
          <h4>Fashion. Expression. Creation.</h4>
          <p>
          A group of spirited brands offering accessible fashion that enables people to express themselves.
          Pakistan’s leading fashion brands Outfitters and Ethnic with omnichannel presence, 120+ stores across 20 cities.
          Established in 2003 with a vision to uplift the fashion industry in Pakistan, the company has achieved significant scale in design, manufacturing and retail operations and grown its portfolio of brands over the last decade. Serving the urban apparel need segment as its core, Outfitters is now poised to look beyond and aims to elevate its concept to consumer experience.
          We have managed to bring our customers the products they have always wanted, at prices that are acceptable to them. Making fashion affordable and inclusive is how we at Outfitters aspire to uplift the persona of our customers and the entrepreneurial spirit in the industry.
          </p>
        </div>
      </section>

      <section className="education" id="education">
        <div className="main-text">
          <h2><span>What's</span> Happening</h2>
        </div>
        <div className="education-content">
          <div className="box">
            <div className="box-image">
              <img src={logo1} alt="logo1"/>
            </div>
            
            <h3>Outfitters x Sway</h3>
            <p>
            Outfitters x Sway Dance Project is a collaboration reflecting upon the concept of the free spirit...
            </p>
            <Link to = "https://www.outfittersstores.com/#:~:text=Driven%20by%20the%20spirit%20to%20make%20fashion%20accessible%20to%20everyone.,-Differentiated%20by&text=Never%20resting%20on%20your%20laurels." className="read">Read More</Link>
          </div>
          <div className="box">

            <div className="box-image">
              <img src={logo2} alt="logo2"/>
            </div>
            <h3>Outfitters Bags the Best Retail Award</h3>
            <p>
            We’re STOKED! Outfitters has won the award for the best retail label of the year at the Hum Style Awards 2021...
            </p>
            <Link to = "https://www.outfittersstores.com/#:~:text=Driven%20by%20the%20spirit%20to%20make%20fashion%20accessible%20to%20everyone.,-Differentiated%20by&text=Never%20resting%20on%20your%20laurels." className="read">Read More</Link>
          </div>
        </div>
      </section>

      <section className="courses" id="courses">
        <div className="main-text">
          <h2><span>Product</span> Category</h2>
        </div>
        <div className="courses-content">
          <div className="box">
            <h3>Men</h3>
            <ol>
              <li><strong>1: </strong>Shirts</li>
              <li><strong>2: </strong>T-Shirts</li>
              <li><strong>3: </strong>Essentials</li>
              <li><strong>4: </strong>Looks and Retreats</li>
            </ol>
          </div>
          <div className="box">
            <h3>WOMEN</h3>
            <ol>
              <li><strong>1: </strong>Shirts</li>
              <li><strong>2: </strong>Jeans</li>
              <li><strong>3: </strong>Retreats</li>
              <li><strong>4: </strong>Essential</li>
            </ol>
          </div>
          <div className="box">
            <h3>JUNIORS</h3>
            <ol>
              <li><strong>1: </strong>Girls</li>
              <li><strong>2: </strong>Boys</li>
              <li><strong>3: </strong>Baby Boys</li>
              <li><strong>3: </strong>Baby Girls</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="last-text">
          <p>Copyright © by Outfitters All Rights Reserved.</p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/outfitterspk/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle'></i></a>
          <a href="https://www.instagram.com/outfitters_pk/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>        </div>
        <div className="top">
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </section>
    </div>
  );
};

export default Home;
