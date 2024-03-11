import './Footer.css'
import logo2 from '../assets/images/doughnuts2.png'

function Footer() {

    return (

      <footer>
      
                <div className="logo2">
                    <a href='./index.html'><img src={logo2} alt="company logo displaying a doughnut"></img></a>
                </div>
            <ul className='quick-links'>
                <li><a href='#'>Doughnuts</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Delivery Policy</a></li>
                <li><a href='#'>Terms and Conditions</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Terms of Service</a></li>
                <li><a href='#'>Refund Policy</a></li>
            </ul>

            <ul className='social-media'>
                <li><a href='#'><i className="bi bi-facebook"></i></a></li>
                <li><a href='#'><i className="bi bi-instagram"></i></a></li>
                <li><a href='#'><i className="bi bi-twitter"></i></a></li>
                <li><a href='#'><i className="bi bi-envelope-fill"></i></a></li>
            </ul>

            <ul className='locations-links'>
                <li><a href='#'><i className="bi bi-geo-alt-fill"> Manchester</i></a></li>
                <li><a href='#'><i className="bi bi-geo-alt-fill"> Stockport</i></a></li>
                <li><a href='#'><i className="bi bi-geo-alt-fill"> Bolton</i></a></li>
                <li><a href='#'><i className="bi bi-geo-alt-fill"> Bury</i></a></li>
            </ul>
      </footer>
    );

}

export default Footer;