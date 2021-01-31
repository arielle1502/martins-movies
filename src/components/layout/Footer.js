import React, {Fragment} from 'react'
import logo from '../../assests/footer logo (3).png'

const Footer = () => {
  
  const date = new Date();
  return (
    <Fragment>
      <footer className="bg-dark">
    <div className="row">
      <div className="col logo-col">
        <img src={logo} width="300" alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.</p>
      </div>
      <div className="col twitter-col">
        <h2>Twitter Feed</h2>
        <p>Check out 'Groci - Organic Food and Grocery Market WordPress Theme' on #EnvatoMarket by @SinanIk #themeforest https://t.co/gujUnY3ayc
</p>
      </div>
      <div className="col links-col">
        <h2>Useful Links</h2>
        <ul>
          <li><a href="#">About Martin's Movies</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Error 404</a></li>
        </ul>
      </div>
      <div className="col insta-col">
        <h2>Instagram</h2>
        <a href="#">Follow Us!</a>
      </div>
    </div>
<hr/>
    <div className="row">
      
      <div className="col footer-list">
      <ul>
          <li><a href="#">Privacy & Cookies   </a></li>
          <li><a href="#">Terms & Conditions   </a></li>
          <li><a href="#">Legal Disclaimer    </a></li>
          <li><a href="#">Community   </a></li>
        </ul>
      </div>
      <div className="col copyright"><p className='py-2 '>
      copyright { String.fromCharCode(169)}
      {' ' + date.getFullYear()}
    </p></div>
    </div>
  </footer>
  </Fragment>
  )
}

export default Footer