import React from "react";
import classes from "./Footer.module.css";
import citizenChoice from "../../Images/citizenchoice.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.lFooter}>
          <div className={classes.head}>
            <img
              src={citizenChoice}
              style={{ height: "50px", width: "50px" }}
              alt='Citizen Choice Logo'
            />
            <div>
              <h1>Citizen Choice</h1>
              <p>
                Citizen Choice is a social networking site for people craving to
                teach and learn. We are committed to enable people to learn and
                collaborate with each other.
              </p>
              {/* <div className={classes.socials}>
                <a href='#'>
                  <i className='fa fa-facebook'></i>
                </a>
                <a href='#'>
                  <i className='fa fa-twitter'></i>
                </a>
                <a href='#'>
                  <i className='fa fa-linkedin'></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <ul className={classes.rFooter}>
          {/* <li style={{ marginTop: "" }}>
            <h2>Features</h2>
            <ul className={classes.box}>
              <li href='#'>Friends</li>
              <Link to = {{pathname:"/explore"}}><li href='#'>Education</li></Link>
              <li href='#'>News</li>
              <li href='#'>Content Writing</li>
            </ul>
          </li> */}
          {/* <li className={classes.features}>
            <h2>Services</h2>
            <ul className={classes.box + classes.hBox}>
              <li href='#'>Social Media</li>
              <Link to = {{pathname:"/explore"}}><li href='#'>Courses</li></Link>
              <li href='#'>Pages</li>
              <li href='#'>Articles</li>
            </ul>
          </li>
           */}
          <li>
            {/* <h2>Legal</h2> */}
            <ul className={classes.box}>
              <Link to={{ pathname: "/tos" }}>
                <li href='#'>Privacy Policy</li>
              </Link>
              <Link to={{ pathname: "/tos" }}>
                <li href='#'>Terms of Use</li>
              </Link>
              <Link to={{ pathname: "/contactUs" }}>
                <li href='#'>Contact Us</li>
              </Link>
            </ul>
          </li>
        </ul>
        <div className={classes.bFooter}>
          <p>All Rights Reserved by &copy;Citizen Choice 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
