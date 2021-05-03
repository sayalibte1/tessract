import React from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";
import mobileuser from "../../../src/mobile-user.jpg"
import city from "../../../src/city.jpeg"
import jioapps from "../../../src/applications.png"
import jioprogram from "../../../src/jioprogram.png"
import { BiArrowToBottom } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";
import {BiRightArrowAlt} from "react-icons/bi";
import {BiBulb} from "react-icons/bi";

import Footer from "../footer/index"
function developer() {
    return (
        <div>
      <div className="App">
      <div className="nav">
          <div className="navwrapper">
          <Link style={{color:"blue"}}>Why to Develop</Link>
           <Link><BsQuestion viewBox="0 0 24 1" size="30px" style={{paddingtop:'0px'}}/>How to DEVELOPE </Link>
           <Link><BiArrowToBottom viewBox="0 0 24 12" size="20px"/>DOWNLOADS</Link>
           <Link>COMMONITY</Link>
           <Link>SIGN UP/SIGN UP</Link>
          </div>
      </div>
      <div className="container">
          <div className="containerstyle"> </div>
          <div className="containercontent">
              <h2 className="containerheading">Jio Tessract Developer Platform</h2>
              <p className="info">Be a part building apps for the future of mind reality with JioGlass</p>
              <span className="links">Start developing</span>
              <span className="links">Download kits</span>
         
          </div>
      </div>
      <div className="wrapper">
          <div className="wrappercontent">
              <h3 className="containerheading">Develop for the next Billion internet users</h3>
              <div className="contentfirst">
                <div className="image">
                    <img src={mobileuser}/>
                </div>
                <div className="info">
                    <p className="heading">
                        The immediate growth
                    </p>
                    <p>Publish and monetize on India’s first mixed reality appstore</p>
                    <a>Start developing</a>
                </div>
              </div>
              <div className="contentfirst">
                <div className="image">
                    <img src={city}/>
                </div>
                <div className="info">
                    <p className="heading">
                        5G network growth
                    </p>
                    <p>Publish and monetize on India’s first mixed reality appstore</p>
                    <p>-Mukesh ambani</p>
                    <p>With a growth in 5G network, the increase of mixed reality<br/> experiences will be seaminess.</p>
                    <a>Sign in now</a>
                </div>
              </div>
          </div>
          <div className="jioapps">
              <h3>Jio is everything you imagined in a Mixed Reality Innovation</h3>
              <p>Publish your applications on the JioGlass AppStore and play your part in democratising mixed reality</p>
              <div className="image">
                    <img src={jioapps}/>
                </div>
          </div>
      </div>
      <div className="jioprogram">
          <div className="jioprogramcontainer">
          <img src={jioprogram}/>
          <h3>JioGlass Program Launch 2021</h3>
          <p>Will be initially launch june 2021 & then finally to the customer market by december 2021</p>
          <a>Keep me updated</a><a>Submit concept</a>
          </div>
      </div>
      <div className="wrapper">
          <div className="processcontainer">
              <h3>How to get started ?</h3>
              <p>Simple 4 step process</p>
              <div className="processes">
                  <div className="item">
                      <button><BsQuestion viewBox="-5 4 28 8" size="30px" style={{paddingtop:'0px'}}/></button>
                      <span className="notification">1</span>
                      <p>Expire & know</p>
                      <a>how to develop</a>
                  </div>
                  <div className="item">
                      <button><BiBulb viewBox="-2 4 26 8" size="30px" style={{paddingtop:'0px'}}/></button>
                      <span className="notification">2</span>
                      <div>
                      <a>submit</a><p>concept aplication</p></div>
                      
                  </div>
                  <div className="item">
                      <button><BsQuestion viewBox="-5 4 28 8" size="30px" style={{paddingtop:'0px'}}/></button>
                      <span className="notification">3</span>
                      <div>
                      <a>signup</a><p>to access tools</p></div>
                  </div>
                  <div className="item">
                      <button><BsQuestion viewBox="-5 4 28 8" size="30px" style={{paddingtop:'0px'}}/></button>
                      <span className="notification">5</span>
                      <p>Expire & know</p>
                      <a>how to develop</a>
                  </div>
              </div>
          </div>
      </div>
      <div className="develop">
          <div className="developcontainer">
          <div className="developleft">
              <h3>How to develop ?</h3>
              <p>Get first-mover advantage of working closely with the creators of JioGlass,
                   early access to devkits and marketing support to launch your application
                   Get first-mover advantage of working closely with the creators of JioGlass, 
                   early access to devkits and marketing support to launch your application</p>
                   <a>know more</a>
          </div>
          <div className="developright">
              <p><a>Sign up</a><BiRightArrowAlt viewBox="11 0 2 19" size="20px" style={{paddingtop:'0px',color:'blue'}}/></p>
          </div>
          </div>
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
  export default developer;