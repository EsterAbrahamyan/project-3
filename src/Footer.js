import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer_area">
        <h3 className="footer_title">Օգտակար հղումներ</h3>
        <ul className="footer_list">
          <li><Link to='/order'>Ինչպե՞ս պատվիրել</Link></li>
          <li><Link to='/about'>Մեր մասին</Link></li>
          <li><Link to='/contact'>Հետադարձ Կապ</Link></li>
        </ul> 
        <div className="footer-social-icons">
          <div className="float-right">
            <ul>
              {/* <li><a href=""><i className="fa fa-github" aria-hidden="true"></i></a></li>
              <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}
              <li><Link to="https://www.instagram.com/your_username/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></Link></li>
              <li><Link to="https://www.linkedin.com/your_username/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></Link></li>
              <li><Link to="https://www.facebook.com/your_username/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></Link></li>
              <li><Link to="https://www.github.com/EsterAbrahamyan/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></Link></li>
              

            </ul>
          </div>
        </div>     
      </div>          
      <div className="footer_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="float-left">
              <div>2023 <a href=" ">SweetEst</a>. Բոլոր իրավունքները պաշտպանված են։</div>
            </div>
            <div className="float-right">
              Powered by <a href=" " target="_blank">HK Digital Agency </a> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;