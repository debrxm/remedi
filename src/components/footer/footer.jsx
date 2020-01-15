import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ozzy from '../../assets/ozzy.svg';
import instagram from '../../assets/socials/instagram.svg';
import facebook from '../../assets/socials/facebook.png';
import twitter from '../../assets/socials/twitter.png';
import CustomForm from '../newsletter/custom-form';
import './footer.scss';
const Footer = ({ history, match }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <img src={ozzy} alt="LOGO" className="logo" />
          <br />
          <p>Feel trendy. Feel authentic.</p>
          <br />
          <a href="https://web.facebook.com/profile.php?id=100013327810283">
            <div className="logo-border">
              <img src={facebook} alt="Facebook Logo" />
            </div>
          </a>
          <a href="https://twitter.com/ozzycodes">
            <div className="logo-border">
              <img src={twitter} alt="Twitter Logo" />
            </div>
          </a>
          <a href="https://www.instagram.com/ozzycodes/">
            <div className="logo-border">
              <img src={instagram} alt="Instagram Logo" />
            </div>
          </a>
        </div>
        <div className="menu">
          <h2 className="heading">MENU</h2>
          <div className="menu-links">
            <h4
              className="menu-link"
              onClick={() => history.push(`${match.url}shop/hoodies`)}
            >
              Hoodies
            </h4>
            <h4
              className="menu-link"
              onClick={() => history.push(`${match.url}shop/tees`)}
            >
              Tees
            </h4>
            <h4
              className="menu-link"
              onClick={() => history.push(`${match.url}shop/accessories`)}
            >
              Accessories
            </h4>
            <Link to="/care" className="menu-link">
              Care Instructions
            </Link>
            <Link to="/contact" className="menu-link">
              Contact
            </Link>
          </div>
        </div>
        <CustomForm />
      </div>
      <br />
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} Ozzy Store All rights
        reserved | Designed by{' '}
        <a href="https://ozzy-dev.netlify.com"> Ozzy-dev</a>
      </p>
    </footer>
  );
};

export default withRouter(Footer);
